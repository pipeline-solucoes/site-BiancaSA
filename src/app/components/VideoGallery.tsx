import React, { useState } from 'react'
import {
  Box,
  List,
  ListItemButton,
  useMediaQuery,
  Typography,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'

type Video = {
  id: string
  title: string
  description?: string
}

type VideoGalleryProps = {
  videos: Video[]
  backgroundList: string
  borderRadius: number
}

const GalleryWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
  height: 'auto',
  width: '100%',  
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}))

const ListWrapper = styled(List, {
  shouldForwardProp: (prop) => prop !== 'background' && prop !== 'borderRadius',
})<{background: string; borderRadius: number;}>(({ theme, background, borderRadius }) => ({
  width: '40%',
  maxWidth: '500px',
  background: background,
  borderRadius: borderRadius,
  gap: '16px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

const VideoContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}))

const AspectRatioBox = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%', // 16:9 aspect ratio
}))

const ResponsiveIframe = styled('iframe', {
  shouldForwardProp: (prop) => prop !== 'borderRadius',
})<{borderRadius: number}>(({ theme, borderRadius }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 0,
  borderRadius: borderRadius ?? theme.shape.borderRadius,
}))

export const VideoGallery: React.FC<VideoGalleryProps> = ({ videos, backgroundList, borderRadius }) => {
  const [selected, setSelected] = useState<Video>(videos[0])
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <GalleryWrapper>
      <motion.div
        key={selected.id}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ flex: 1 }}
      >
        <VideoContainer>
          <AspectRatioBox>
            <ResponsiveIframe
              borderRadius={borderRadius}
              src={`https://www.youtube.com/embed/${selected.id}`}
              allowFullScreen
              title={selected.title}
            />
          </AspectRatioBox>

          <Box sx={{ p: 2 }}>
            <Typography
              variant="body1"
              component="div"
              sx={{
                color: 'text.secondary',
                '& a': {
                  color: 'primary.main',
                  textDecoration: 'underline',
                },
              }}
              dangerouslySetInnerHTML={{ __html: selected.description || '' }}
            />
          </Box>
        </VideoContainer>
      </motion.div>

      <ListWrapper background={backgroundList} borderRadius={borderRadius}>
        {videos.map((video) => (
          <ListItemButton
            key={video.id}
            selected={selected.id === video.id}
            onClick={() => setSelected(video)}
            sx={{
              alignItems: 'flex-start',
              gap: 2,
              padding: 1.5,
            }}
          >
            <Box
              component="img"
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              sx={{
                width: 120,
                height: 90,
                borderRadius: 1,
                flexShrink: 0,
                objectFit: 'cover',
              }}
            />
            <Box>
              <Typography variant="h5" component="h5">
                {video.title}
              </Typography>
            </Box>
          </ListItemButton>
        ))}
      </ListWrapper>
    </GalleryWrapper>
  )
}
