import * as React from 'react'
import { NextPage } from 'next'
import { Stack, Text, Link, FontWeights } from '@fluentui/react'

const baseStyle = {
  root: {
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
    textAlign: 'center'
  }
}

const boldStyle = { root: { fontWeight: FontWeights.semibold } }

const verticalGapStackTokens = {
  childrenGap: 16
}

const horizontalGapStackTokens = {
  childrenGap: 16
}

const IndexPage: NextPage = () => (
  <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={baseStyle} className="App" tokens={verticalGapStackTokens}>
    <img src="/fluentui.png" alt="logo" style={{ width: '100%', maxWidth: 768 }} />
    <Text variant="xxLarge" styles={boldStyle}>
      Welcome to Your Fluent UI App
    </Text>
    <Text variant="large">For a guide on how to customize this project, check out the Fluent UI documentation.</Text>
    <Text variant="large" styles={boldStyle}>
      Essential Links
    </Text>
    <Stack horizontal horizontalAlign="center" tokens={horizontalGapStackTokens}>
      <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
      <Link href="https://stackoverflow.com/questions/tagged/fluent-ui">Stack Overflow</Link>
      <Link href="https://github.com/microsoft/fluentui">Github</Link>
      <Link href="https://twitter.com/fluentui">Twitter</Link>
    </Stack>
    <Text variant="large" styles={boldStyle}>
      Design System
    </Text>
    <Stack horizontal horizontalAlign="center" tokens={horizontalGapStackTokens}>
      <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web/icons">Icons</Link>
      <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web/typography">Typography</Link>
      <Link href="https://aka.ms/themedesigner">Theme</Link>
    </Stack>
  </Stack>
)

export default IndexPage
