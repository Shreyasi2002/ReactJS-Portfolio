import { useEffect} from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
    const location = useLocation();
    let path = '';
    // console.log(location);
    if (location.hash) {
        path = location.pathname;
    }
    else if (location.pathname === '/') {
        if (window.scrollY <= 500) {
            path = location.pathname + "home";
        }
        else {
            path = "/return-back"
        }
    }
    else {
        path = location.pathname;
    }
    // console.log(path);
    useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return <>{props.children}</>
};

export default ScrollToTop;