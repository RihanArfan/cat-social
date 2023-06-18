/**
 * Random hue based on scroll position
 *
 * @returns Hue for HSL colour
 */
export default function () {
  const SPEED = 0.1; // slow colour change speed by 90%
  const HUE_OFFSET = 180; // start at 180deg (teal)

  // bg hue based on scroll position. if exceeds 360, it loops back to 0
  const { y } = useWindowScroll();
  const { height } = useWindowSize();

  const hue = computed(() => {
    const scroll = y.value / height.value;
    const hue = scroll * 360 * SPEED + HUE_OFFSET;
    return hue % 360;
  });

  return { hue };
}
