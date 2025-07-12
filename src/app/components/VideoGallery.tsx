import React, { useState } from 'react'
import {
  Box,
  List,
  ListItemButton,
  useMediaQuery,
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

const GalleryWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'background' && prop !== 'borderRadius',
})<{ background: string; borderRadius: number }>(({ theme, background, borderRadius }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  width: '100%',
  height: '100%',
  padding: '16px',
  background: background,
  borderRadius: borderRadius,
  boxSizing: 'border-box',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    height: 'auto',
  },
  alignContent: 'center',
  alignItems: 'center',
}))

const ListWrapper = styled(List)(({theme}) => ({
  width: '40%',
  maxWidth: '500px',
  gap: '16px',
  overflowY: 'auto',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '100%',
  },
}))

const VideoContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',   
}))

const AspectRatioBox = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%', // 16:9
  flexGrow: 1,
}))

export const ContainerTitulo = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  width: '100%',
}))

const Titulo = styled('div')(({ theme }) => ({
  width: '100%',
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.h5?.fontWeight,
  fontStyle: theme.typography.h5?.fontStyle,
  lineHeight: theme.typography.h5?.lineHeight,
  letterSpacing: theme.typography.h5?.letterSpacing,
  fontSize: theme.typography.h5?.fontSize,
  margin: theme.typography.h5?.margin,
}))

const Description = styled('div')(({ theme }) => ({
  width: '100%',
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.body1?.fontWeight,
  fontStyle: theme.typography.body1?.fontStyle,
  lineHeight: theme.typography.body1?.lineHeight,
  letterSpacing: theme.typography.body1?.letterSpacing,
  fontSize: theme.typography.body1?.fontSize,  
}))

const StyledThumbnail = styled('img')(({ theme }) => ({
  width: 120,
  height: 90,
  borderRadius: theme.shape.borderRadius,
  flexShrink: 0,
  objectFit: 'cover',
}))

const ResponsiveIframe = styled('iframe', {
  shouldForwardProp: (prop) => prop !== 'borderRadius',
})<{ borderRadius: number }>(({ theme, borderRadius }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 0,
  borderRadius: borderRadius ?? theme.shape.borderRadius,
}))

export const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  backgroundList,
  borderRadius,
}) => {

  const [selected, setSelected] = useState<Video>(videos[0]);
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <GalleryWrapper background={backgroundList} borderRadius={borderRadius}>
      
      <motion.div
        key={selected.id}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
            flex: 1,
            height: isMobile ? 'auto' : '100%',
            width: '100%',
        }}        
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
        </VideoContainer>
      </motion.div>

      <ListWrapper>
        {videos.map((video) => (
          <ListItemButton
            key={video.id}
            selected={selected.id === video.id}
            onClick={() => setSelected(video)}
            sx={{
              alignItems: 'flex-start',
              gap: 2,
              padding: 1.5,
              flexDirection: 'column',
              alignContent: 'flex-start',
            }}
          >
            <ContainerTitulo>
              <StyledThumbnail
                alt={video.title}
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              />
              <Titulo>{video.title}</Titulo>
            </ContainerTitulo>

            <Description
              dangerouslySetInnerHTML={{ __html: video.description || '' }}
            />
          </ListItemButton>
        ))}
      </ListWrapper>
    </GalleryWrapper>
  )
}

