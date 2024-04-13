// import { Tooltip, Button, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useBreakpoints = () => {
  const xxs = useMediaQuery("(min-width: 0px)");
  const xs = useMediaQuery("(min-width: 425px)");
  const sm = useMediaQuery("(min-width: 576px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1024px)");
  const xl = useMediaQuery("(min-width: 1260px)");
  const xxl = useMediaQuery("(min-width: 1560px)");
  return { md, lg, xl, xxl, sm, xs, xxs };
};

export default useBreakpoints;
