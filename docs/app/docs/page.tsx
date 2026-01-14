import { next } from "@umami/shiso/server";
import config from "@/app/shiso.config.json";
import { DocsPage } from "./[...slug]/DocsPage";

const { generateMetadata, renderPage } = next("docs", config);

export { generateMetadata };

export default renderPage((props) => {
  return <DocsPage {...props} />;
});
