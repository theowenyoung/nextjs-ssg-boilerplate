import React, { Children } from 'react'
import NextLink from 'next/link'
import useI18n from '../hooks/use-i18n'

export default function Link({ children, href, as, lang, noLang, ...props }) {
  const i18n = useI18n()
  const lng = lang || i18n.lang
  const child = Children.only(
    typeof children === 'string' ? <a>{children}</a> : children
  )

  function onClick(e) {
    const el = document.querySelector('html')
    if (el) el.lang = lng
    if (typeof child.props.onClick === 'function') {
      child.props.onClick(e)
    }
  }

  return (
    <NextLink
      href={noLang ? href : fixHref(href, lng)}
      as={noLang ? as : fixAs(as, lng)}
      {...props}
    >
      {React.cloneElement(child, { onClick })}
    </NextLink>
  )
}

function fixHref(href,lng){
  return appendLangPrefix(href, lng)
}

function fixAs(as,lng){
  return appendLangPrefix(as, lng)
}

 function appendLangPrefix(url, lang) {
  if (!url || !url.length) return url
  return `/${lang}/${url.replace(/^\//, '')}`.replace(/\/$/, '')
}