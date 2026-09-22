import { useRef } from "react";

export function useDragScroll() {
  const ref = useRef(null);
  const state = useRef({ isDown: false, startX: 0, scrollLeft: 0, moved: false });

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;

    const el = ref.current;
    if (!el) return;

    state.current.isDown = true;
    state.current.moved = false;
    state.current.startX = e.clientX;
    state.current.scrollLeft = el.scrollLeft;

    el.style.scrollSnapType = "none";
    el.setPointerCapture?.(e.pointerId);
  };

  const endDrag = (e) => {
    if (!state.current.isDown) return;

    state.current.isDown = false;
    const el = ref.current;
    if (el) {
      el.style.scrollSnapType = "";
      if (e?.pointerId != null) el.releasePointerCapture?.(e.pointerId);
    }
  };

  const onPointerMove = (e) => {
    if (!state.current.isDown) return;
    const el = ref.current;
    if (!el) return;

    const walk = e.clientX - state.current.startX;
    if (Math.abs(walk) > 5) state.current.moved = true;
    el.scrollLeft = state.current.scrollLeft - walk;
  };

  const onClickCapture = (e) => {
    if (state.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return {
    ref,
    handlers: {
      onPointerDown,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onPointerMove,
      onClickCapture,
    },
  };
}
