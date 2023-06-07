import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Post } from "@/src/types";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { Colors } from "@/styles/Colors";
import Box from "@mui/material/Box";
import MyLink from "@/src/components/common/Link";
import Head from 'next/head'
import Fade from '@mui/material/Fade';

const PostPage = () => {
  const router = useRouter();
  const { t } = useTranslation('blog');
  const posts: Post[] = t('posts', {}, { returnObjects: true });
  const postId = Number(router.query.id);
  const post = posts?.[postId];

  return <>
    <Head>
      <title>{post?.title}</title>
    </Head>
    <Fade in={true} timeout={1000}>
      <Stack sx={{ maxWidth: 768, margin: '0 auto', mt: 5 }}>
        <Typography sx={{ mb: 1 }} color={'#60a5fa'}>{post?.category}</Typography>
        <Typography variant={'h3'} sx={{ fontWeight: 700 }}>{post?.title}</Typography>
        <Stack direction={'row'} sx={{ color: Colors.greyShade, mt: 2 }}>
          <Typography>{post?.author}</Typography>
          <Divider sx={{ mx: 1 }} flexItem orientation={'vertical'}/>
          <Typography>{post?.publishDate}</Typography>
          <Divider sx={{ mx: 1 }} flexItem orientation={'vertical'}/>
          <Typography>{post?.tags?.map((tag) => `#${tag}`)?.join(' ')}</Typography>
        </Stack>
        <Box sx={{ mt: 3 }} dangerouslySetInnerHTML={{
          __html: post?.content
        }}/>
      </Stack>
    </Fade>
    <Box sx={{ width: 'fit-content', margin: '30px auto' }}>
      <MyLink href={{
        pathname: '/blog',
        query: router.query
      }}>
        <Button size={'large'} variant={'contained'}>{t('backButton')}</Button>
      </MyLink>
    </Box>
  </>
};

export default PostPage;
