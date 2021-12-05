import * as React from "react";
import styles from "./index.module.scss";
import cn from "classnames";

import { gsap } from "gsap";
import { useEffect, useState } from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import { StoreProvider } from "../../components/StoreProvider/StoreProvider";
import { ScrollTriggerProxy } from "../../components/ScrollTriggerProxy/ScrollTriggerProxy";
import Layout from "../../components/Layout/Layout";
import { gePageData } from "../../components/pages";

type Props = {
  hero: any;
};
const projectPage: React.FC<Props> = ({ hero }) => {
  console.log(hero);

  return (
    <StoreProvider>
      <ScrollTriggerProxy />
      <Layout>
        <h1>helloooooo</h1>
      </Layout>
    </StoreProvider>
  );
};

export default projectPage;

export const getStaticProps: GetStaticProps = async () => {
  const hero = gePageData("hero")["en"];
  return {
    props: {
      hero,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { pageSlug: "we" } }],
    fallback: true,
  };
};
