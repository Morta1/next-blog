import { Post } from "@/src/types";
import styled from "@emotion/styled";
import { Divider, Stack, Typography } from "@mui/material";
import { Colors } from "@/styles/Colors";
import Image from 'next/image';
import MyLink from "@/src/components/common/Link";
import Box from "@mui/material/Box";

const PostPreview = ({ post }: { post: Post }) => {
  return <Stack direction={'row'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'} gap={5}>
    <MyLink href={`blog/${post?.id}`}>
      <StyleImage priority src={`/images/${post?.thumbnail}`} width={800} height={450} alt=""/>
    </MyLink>
    <Stack sx={{ width: 400 }}>
      <MyLink href={`blog/${post?.id}`}>
        <Box>
          <Typography sx={{ mb: 1 }} color={'#60a5fa'}>{post?.category}</Typography>
          <Typography variant={'h5'} sx={{ fontWeight: 700 }}>{post?.title}</Typography>
          <Stack direction={'row'} sx={{ color: Colors.greyShade, mt: 2 }}>
            <Typography>{post?.author}</Typography>
            <Divider sx={{ mx: 1 }} flexItem orientation={'vertical'}/>
            <Typography>{post?.publishDate}</Typography>
          </Stack>
        </Box>
      </MyLink>
    </Stack>
  </Stack>
};

const StyleImage = styled(Image)`
  border-radius: 10px;
  height: auto;
  width: 100%;
  max-width: 450px;
`

export default PostPreview;
