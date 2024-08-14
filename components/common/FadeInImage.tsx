'use client'

import Image from 'next/image'
import { clsx } from 'clsx'
import { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
  src: string
  alt: string
  height?: number
  width?: number
  layout?: string
  objectFit?: string
  quality?: number
  onError?: () => void
}

const restyleLoadedImage = (e: any) => {
  ;(e.target as HTMLImageElement).style.opacity = '1'
  ;(e.target as HTMLImageElement).style.filter = 'none'
}

export const FadeInImage = ({
  className,
  style,
  src,
  alt,
  height,
  width,
  layout,
  objectFit,
  quality,
  onError
}: Props) => {
  return (
    <Image
      className={clsx('image-loading', className)}
      style={style}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={e => restyleLoadedImage(e)}
      priority
      decoding={'async'}
      layout={layout}
      objectFit={objectFit}
      quality={quality}
      onError={onError}
    />
  )
}
