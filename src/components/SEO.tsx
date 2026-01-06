import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
};

export function SEO({ title, description, canonical, noindex }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Helmet>
  );
}
