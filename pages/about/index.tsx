import * as React from "react";
import styles from "./about.module.scss";
import cn from "classnames";
import Layout from "../../components/Layout/Layout";
import { StoreProvider } from "../../components/StoreProvider/StoreProvider";
const About = () => {
  return (
    <StoreProvider>
      <Layout>
        <div className={cn(styles.heroContainer)}>
          <div className="grid">
            <div className={"col-12"}>
              <h1 className={styles.title}>Tommaso Laterza</h1>
            </div>
            <div
              className={
                "col-12 col-start-sm-3 col-end-sm-12 col-start-md-3 col-end-md-12 col-start-lg-6 col-end-lg-12"
              }
            >
              <h4 className={styles.title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eget accumsan neque. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Morbi sed erat in est
                fermentum.
              </h4>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eget accumsan neque. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Morbi sed erat in est
                fermentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eget accumsan neque. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Morbi sed erat in est
                fermentum.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </StoreProvider>
  );
};

export default About;
