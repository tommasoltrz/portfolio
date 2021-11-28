// necessary to make scss module work. See https://github.com/gatsbyjs/gatsby/issues/8144#issuecomment-438206866
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";
