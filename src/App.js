import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CollectionDetailSelected from "./pages/CollectionDetailSelected";
import Successed from "./pages/Successed";
import CollectionDetailSelectedErr from "./pages/CollectionDetailSelectedErr";
import CollectionDetail from "./pages/CollectionDetail";
import Lending from "./pages/Lending";
import Failed from "./pages/Failed";
import Successed1 from "./pages/Successed1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/successed":
        title = "";
        metaDescription = "";
        break;
      case "/collection-detail-selected-error":
        title = "";
        metaDescription = "";
        break;
      case "/collection-detail":
        title = "";
        metaDescription = "";
        break;
      case "/lending":
        title = "";
        metaDescription = "";
        break;
      case "/failed":
        title = "";
        metaDescription = "";
        break;
      case "/successed1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CollectionDetailSelected />} />
      <Route path="/successed" element={<Successed />} />
      <Route
        path="/collection-detail-selected-error"
        element={<CollectionDetailSelectedErr />}
      />
      <Route path="/collection-detail" element={<CollectionDetail />} />
      <Route path="/lending" element={<Lending />} />
      <Route path="/failed" element={<Failed />} />
      <Route path="/successed1" element={<Successed1 />} />
    </Routes>
  );
}
export default App;
