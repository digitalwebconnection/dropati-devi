import React, { useCallback, useEffect, useRef } from "react";

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

export function ScrollExpand({
  src = "",
  alt = "",
  header = null,
  scrollHint = "Scroll to expand",
  startWidth = null,
  startHeight = null,
  startRadius = 24,
  endRadius = 28,
  endHeight = null,
  endWidth = null,
  endTopInset = null,
  endBottomInset = null,
  endLeftInset = null,
  endRightInset = null,
  mediaZoom = 1.18,
  scrollDistance = 1.15,
  holdDistance = 0.85,
  smoothing = 0.1,
  overlayScrim = 0.84,
  useWindowScroll = true,
  enabled = true,
  stageClassName = "bg-bone",
  children,
  className = "",
  style,
  ...rest
}) {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const frameRef = useRef(null);
  const mediaRef = useRef(null);
  const headerRef = useRef(null);
  const overlayRef = useRef(null);
  const scrimRef = useRef(null);
  const hintRef = useRef(null);
  const previewBoxRef = useRef(null);

  // Store geometry metrics in a ref so resize/scroll uses fresh values
  const geometryRef = useRef({
    stageW: 0,
    stageH: 0,
    initW: 600,
    initH: 350,
    topInset: 220,
    bottomInset: 180,
    leftInset: 500,
    rightInset: 500,
    endTopInset: 80,
    endBottomInset: 80,
    endLeftInset: 80,
    endRightInset: 80,
    expW: 1280,
    expH: 570,
  });

  const propsRef = useRef({
    startWidth,
    startHeight,
    startRadius,
    endRadius,
    endHeight,
    endWidth,
    endTopInset,
    endBottomInset,
    endLeftInset,
    endRightInset,
    mediaZoom,
    scrollDistance,
    holdDistance,
    smoothing,
    overlayScrim,
    useWindowScroll,
    enabled,
  });

  useEffect(() => {
    propsRef.current = {
      startWidth,
      startHeight,
      startRadius,
      endRadius,
      endHeight,
      endWidth,
      endTopInset,
      endBottomInset,
      endLeftInset,
      endRightInset,
      mediaZoom,
      scrollDistance,
      holdDistance,
      smoothing,
      overlayScrim,
      useWindowScroll,
      enabled,
    };
  }, [
    startWidth,
    startHeight,
    startRadius,
    endRadius,
    endHeight,
    endWidth,
    endTopInset,
    endBottomInset,
    endLeftInset,
    endRightInset,
    mediaZoom,
    scrollDistance,
    holdDistance,
    smoothing,
    overlayScrim,
    useWindowScroll,
    enabled,
  ]);

  const applyProgress = useCallback((p) => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!frame || !media) return;

    const c = propsRef.current;
    const g = geometryRef.current;
    const e = smoothstep(0, 1, p);

    // Calculate insets from initial landscape to expanded framed card (decreased height)
    const currentTop = g.topInset + (g.endTopInset - g.topInset) * e;
    const currentBottom = g.bottomInset + (g.endBottomInset - g.bottomInset) * e;
    const currentLeft = g.leftInset + (g.endLeftInset - g.leftInset) * e;
    const currentRight = g.rightInset + (g.endRightInset - g.rightInset) * e;
    const currentRadius = c.startRadius + (c.endRadius - c.startRadius) * e;

    frame.style.clipPath = `inset(${currentTop}px ${currentRight}px ${currentBottom}px ${currentLeft}px round ${currentRadius}px)`;
    media.style.transform = `scale(${c.mediaZoom + (1 - c.mediaZoom) * e})`;

    if (scrimRef.current) {
      scrimRef.current.style.opacity = `${c.overlayScrim * e}`;
    }

    // Border & shadow on the preview box smoothly tracks expansion with gold accent
    if (previewBoxRef.current) {
      previewBoxRef.current.style.top = `${currentTop}px`;
      previewBoxRef.current.style.left = `${currentLeft}px`;
      previewBoxRef.current.style.width = `${g.stageW - (currentLeft + currentRight)}px`;
      previewBoxRef.current.style.height = `${g.stageH - (currentTop + currentBottom)}px`;
      previewBoxRef.current.style.borderRadius = `${currentRadius}px`;

      const goldAlpha = 0.45 - 0.15 * e;
      previewBoxRef.current.style.borderColor = `rgba(197, 160, 89, ${goldAlpha})`;
      const shadowBlur = 30 + 30 * e;
      const shadowSpread = -10 + 5 * e;
      const shadowAlpha = 0.3 + 0.15 * e;
      previewBoxRef.current.style.boxShadow = `0 20px ${shadowBlur}px ${shadowSpread}px rgba(18, 14, 12, ${shadowAlpha})`;
    }

    // Header at top fades out and floats upward slightly
    if (headerRef.current) {
      const out = smoothstep(0.06, 0.48, p);
      headerRef.current.style.opacity = `${1 - out}`;
      headerRef.current.style.transform = `translate3d(0, ${-28 * out}px, 0)`;
      headerRef.current.style.pointerEvents = out > 0.5 ? "none" : "auto";
    }

    // Scroll hint at bottom fades out immediately
    if (hintRef.current) {
      const gone = smoothstep(0, 0.12, p);
      hintRef.current.style.opacity = `${1 - gone}`;
      hintRef.current.style.transform = `translate3d(0, ${10 * gone}px, 0)`;
    }

    // Overlay content fades in as frame nears expanded state
    if (overlayRef.current) {
      const inn = smoothstep(0.5, 0.92, p);
      overlayRef.current.style.opacity = `${inn}`;
      overlayRef.current.style.transform = `translate3d(0, ${16 * (1 - inn)}px, 0)`;
      overlayRef.current.style.pointerEvents = inn > 0.6 ? "auto" : "none";
    }
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!root || !track || !stage) return;

    let raf = 0;
    let current = 0;
    let target = 0;
    let stageH = 0;
    let stageW = 0;
    let running = false;

    const measure = () => {
      const c = propsRef.current;
      stageH = c.useWindowScroll ? window.innerHeight : root.clientHeight;
      stageW = c.useWindowScroll
        ? document.documentElement.clientWidth || window.innerWidth
        : root.clientWidth;
      if (stageH <= 0 || stageW <= 0) return;

      stage.style.height = `${stageH}px`;
      track.style.height = `${stageH * (1 + Math.max(0, c.scrollDistance) + Math.max(0, c.holdDistance))}px`;

      // 1. Calculate Initial Preview Image Dimensions (Wider Landscape like 1st img)
      let initW = c.startWidth;
      let initH = c.startHeight;

      if (!initW || !initH) {
        if (stageW >= 1024) {
          // Desktop: wide landscape ratio (~16:9)
          initW = Math.round(Math.min(640, stageW * 0.5));
          initH = Math.round(Math.min(360, stageH * 0.44, initW * 0.58));
        } else if (stageW >= 640) {
          // Tablet
          initW = Math.round(Math.min(540, stageW * 0.72));
          initH = Math.round(Math.min(330, stageH * 0.4, initW * 0.6));
        } else {
          // Mobile
          initW = Math.round(stageW * 0.88);
          initH = Math.round(Math.min(250, stageH * 0.35, initW * 0.62));
        }
      }

      // 2. Measure Header bottom position to calculate clean space between title and image
      let headerBottom = 150;
      if (headerRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        if (headerRect.height > 0) {
          headerBottom = headerRect.bottom - stage.getBoundingClientRect().top;
        }
      }

      // Add clean, generous spacing between header title and landscape image
      const headerGap = stageW < 640 ? 28 : 46;
      const topInset = Math.max(
        headerBottom + headerGap,
        Math.round((stageH - initH) * 0.4)
      );
      const bottomInset = Math.max(30, stageH - (topInset + initH));
      const leftInset = Math.round((stageW - initW) / 2);
      const rightInset = stageW - (leftInset + initW);

      // 3. Calculate Expanded Dimensions ("decresign its height and make its perfect")
      let expW = c.endWidth;
      let expH = c.endHeight;

      if (!expW || !expH) {
        if (stageW >= 1024) {
          // Desktop: max 1280px wide, decreased refined height of ~570px (or ~78% of viewport)
          expW = Math.min(1280, Math.round(stageW * 0.92));
          expH = Math.min(570, Math.round(stageH * 0.78));
        } else if (stageW >= 640) {
          // Tablet
          expW = Math.round(stageW * 0.92);
          expH = Math.min(600, Math.round(stageH * 0.82));
        } else {
          // Mobile
          expW = Math.round(stageW * 0.94);
          expH = Math.min(640, Math.round(stageH * 0.9));
        }
      }

      // Calculate Expanded Insets
      const finalEndTop =
        c.endTopInset != null
          ? c.endTopInset
          : Math.max(stageW < 640 ? 36 : 68, Math.round((stageH - expH) / 2));
      const finalEndBottom =
        c.endBottomInset != null
          ? c.endBottomInset
          : Math.max(28, stageH - (finalEndTop + expH));
      const finalEndLeft =
        c.endLeftInset != null ? c.endLeftInset : Math.round((stageW - expW) / 2);
      const finalEndRight =
        c.endRightInset != null ? c.endRightInset : stageW - (finalEndLeft + expW);

      geometryRef.current = {
        stageW,
        stageH,
        initW,
        initH,
        topInset,
        bottomInset,
        leftInset,
        rightInset,
        endTopInset: finalEndTop,
        endBottomInset: finalEndBottom,
        endLeftInset: finalEndLeft,
        endRightInset: finalEndRight,
        expW,
        expH,
      };

      // Position the overlay container precisely over the expanded card region
      if (overlayRef.current) {
        overlayRef.current.style.top = `${finalEndTop}px`;
        overlayRef.current.style.bottom = `${finalEndBottom}px`;
        overlayRef.current.style.left = `${finalEndLeft}px`;
        overlayRef.current.style.right = `${finalEndRight}px`;
        overlayRef.current.style.width = `${expW}px`;
        overlayRef.current.style.height = `${expH}px`;
      }

      // Initialize preview box dimensions matching initial landscape image
      if (previewBoxRef.current) {
        previewBoxRef.current.style.top = `${topInset}px`;
        previewBoxRef.current.style.left = `${leftInset}px`;
        previewBoxRef.current.style.width = `${initW}px`;
        previewBoxRef.current.style.height = `${initH}px`;
        previewBoxRef.current.style.borderRadius = `${c.startRadius}px`;
      }
    };

    const readProgress = () => {
      const c = propsRef.current;
      if (!c.enabled) return 1;
      const span = stageH * Math.max(0.01, c.scrollDistance);
      if (c.useWindowScroll) {
        const top = track.getBoundingClientRect().top;
        return clamp(-top / span, 0, 1);
      }
      return clamp(root.scrollTop / span, 0, 1);
    };

    const tick = () => {
      const c = propsRef.current;
      const k = c.smoothing <= 0 ? 1 : 1 - Math.exp(-1 / (60 * c.smoothing));
      current += (target - current) * k;
      if (Math.abs(target - current) < 0.0004) {
        current = target;
        running = false;
      }
      applyProgress(current);
      raf = running ? requestAnimationFrame(tick) : 0;
    };

    const kick = () => {
      if (running) return;
      running = true;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = readProgress();
      if (propsRef.current.smoothing <= 0) {
        current = target;
        applyProgress(current);
        return;
      }
      kick();
    };

    const onResize = () => {
      measure();
      target = readProgress();
      current = target;
      applyProgress(current);
    };

    measure();
    target = readProgress();
    current = target;
    applyProgress(current);

    const scroller = useWindowScroll ? window : root;
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(root);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [applyProgress, useWindowScroll]);

  return (
    <div
      ref={rootRef}
      className={`scroll-expand ${useWindowScroll ? "" : "scroll-expand--scroller"} ${className}`.trim()}
      style={style}
      {...rest}
    >
      <div ref={trackRef} className="scroll-expand__track">
        <div ref={stageRef} className={`scroll-expand__stage ${stageClassName}`.trim()}>
          {/* Main frame containing expanding image & overlay */}
          <div ref={frameRef} className="scroll-expand__frame">
            <img
              ref={mediaRef}
              className="scroll-expand__media"
              src={src}
              alt={alt}
              draggable={false}
            />

            {/* Dark radial scrim that intensifies on scroll */}
            <div ref={scrimRef} className="scroll-expand__scrim" />

            {/* Content revealed once expanded */}
            {children ? (
              <div ref={overlayRef} className="scroll-expand__overlay">
                {children}
              </div>
            ) : null}
          </div>

          {/* Decorative border & shadow outline framing the initial square image */}
          <div
            ref={previewBoxRef}
            className="absolute pointer-events-none z-10 border-2 border-gold/45 shadow-2xl shadow-ink/35 transition-opacity"
            style={{ borderRadius: `${startRadius}px` }}
          />

          {/* Initial top-centered header */}
          {header ? (
            <div ref={headerRef} className="scroll-expand__header-wrapper">
              {header}
            </div>
          ) : null}

          {/* Initial bottom scroll hint */}
          {scrollHint ? (
            <div ref={hintRef} className="scroll-expand__hint">
              {scrollHint}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ScrollExpand;
