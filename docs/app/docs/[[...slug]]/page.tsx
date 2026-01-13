import { next } from "@umami/shiso/server";
import config from "@/app/shiso.config.json";
import { DocsPage } from "./DocsPage";

const { generateMetadata, generateStaticParams, renderPage } = next(
  "docs",
  config
);

export { generateMetadata, generateStaticParams };

export const dynamicParams = true;

export default renderPage((props) => {
  return <DocsPage {...props} />;
});
