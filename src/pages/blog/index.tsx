import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import PostList from "@/src/components/blog/PostList";
import { Post } from "@/src/types";

const Index = () => {
  const { t } = useTranslation('blog');
  const posts: Post[] = t('posts', {}, { returnObjects: true });

  return <Box sx={{ mt: 3 }}>
    <Head>
      <title>Blog | Nextblog</title>
      <meta name="description" content="Generated by create next app"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Typography textAlign={'center'} variant={'h2'} sx={{ fontWeight: 700 }}>{t('title')}</Typography>
    <Typography textAlign={'center'} variant={'body1'}>{t('subtitle')}</Typography>
    <PostList posts={posts}/>
  </Box>
};

export default Index;
