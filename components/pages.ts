import fs from "fs";
import yaml from "js-yaml";

export function gePageData(pageName: string): any {
  let doc: any;
  try {
    doc = yaml.load(fs.readFileSync(`pages/files/${pageName}.yml`, "utf8"));
  } catch (e) {
    console.log(e);
  }
  return doc;
}
