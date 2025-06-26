import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function FooterWrapper(props) {
  const { colorMode } = useColorMode();
  
  return (
    <>
      <Footer {...props} />
      <div style={{ marginTop: '2rem' }}>
        <Giscus
          repo="SmidigStorm/casestudy"
          repoId="R_kgDOPCP3GA"
          category="Announcements"
          categoryId="DIC_kwDOPCP3GM4CsDO6"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme={colorMode}
          lang="en"
          loading="lazy"
        />
      </div>
    </>
  );
}