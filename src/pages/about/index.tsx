import * as React from "react";
import * as styles from "./about.module.scss";
import cn from "classnames";
import Layout from "../../components/Layout/Layout";
import { StoreProvider } from "../../components/StoreProvider/StoreProvider";
const About = () => {
  return (
    <StoreProvider>
      <Layout>
        <div>
          <h1 className={styles.title}> I am the about page</h1>
        </div>
      </Layout>
    </StoreProvider>
  );
};

export default About;
