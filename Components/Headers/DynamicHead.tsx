import Head from 'next/head';
import React from 'react';
import { Organization } from '../Dashboard/Dashboard';

type Props = {
  org: Organization;
  description: string;
  title?: string;
};

const DynamicHead = (props: Props) => {
  const title = `${props.title ? `${props.title} - ` : ''}${props.org.name}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default DynamicHead;
