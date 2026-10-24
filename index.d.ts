/// <reference path="./globals.d.ts" />
/// <reference path="./lib/assets.d.ts" />
/// <reference path="./lib/assets/types.d.ts" />
/// <reference path="./lib/components.d.ts" />
/// <reference path="./lib/components/FormSwitch.d.ts" />
/// <reference path="./lib/components/Page.d.ts" />
/// <reference path="./lib/components/SearchInput.d.ts" />
/// <reference path="./lib/components/TableRowAssetIcon.d.ts" />
/// <reference path="./lib/components/types.d.ts" />
/// <reference path="./lib/discord/actions.d.ts" />
/// <reference path="./lib/discord/common/app-start-performance.d.ts" />
/// <reference path="./lib/discord/common/constants.d.ts" />
/// <reference path="./lib/discord/common/flux.d.ts" />
/// <reference path="./lib/discord/common/import-tracker.d.ts" />
/// <reference path="./lib/discord/common/logger.d.ts" />
/// <reference path="./lib/discord/common/tokens.d.ts" />
/// <reference path="./lib/discord/common/utils.d.ts" />
/// <reference path="./lib/discord/design.d.ts" />
/// <reference path="./lib/discord/flux.d.ts" />
/// <reference path="./lib/discord/modules/main_tabs_v2.d.ts" />
/// <reference path="./lib/discord/modules/settings.d.ts" />
/// <reference path="./lib/discord/modules/settings/renderer.d.ts" />
/// <reference path="./lib/discord/native.d.ts" />
/// <reference path="./lib/discord/types.d.ts" />
/// <reference path="./lib/discord/utils/modules/finders.d.ts" />
/// <reference path="./lib/discord/utils/modules/metro/subscriptions.d.ts" />
/// <reference path="./lib/externals/browserify.d.ts" />
/// <reference path="./lib/externals/gorhom.d.ts" />
/// <reference path="./lib/externals/react-native-clipboard.d.ts" />
/// <reference path="./lib/externals/react-native-community.d.ts" />
/// <reference path="./lib/externals/react-native-safe-area-context.d.ts" />
/// <reference path="./lib/externals/react-navigation.d.ts" />
/// <reference path="./lib/externals/shopify.d.ts" />
/// <reference path="./lib/externals/zustand.d.ts" />
/// <reference path="./lib/json-storage.d.ts" />
/// <reference path="./lib/json-storage/types.d.ts" />
/// <reference path="./lib/modules/finders.d.ts" />
/// <reference path="./lib/modules/finders/filters.d.ts" />
/// <reference path="./lib/modules/metro.d.ts" />
/// <reference path="./lib/modules/native.d.ts" />
/// <reference path="./lib/modules/native/app.d.ts" />
/// <reference path="./lib/modules/native/fs.d.ts" />
/// <reference path="./lib/modules/types.d.ts" />
/// <reference path="./lib/patcher.d.ts" />
/// <reference path="./lib/patcher/types.d.ts" />
/// <reference path="./lib/plugins/constants.d.ts" />
/// <reference path="./lib/plugins/types.d.ts" />
/// <reference path="./lib/plugins/utils.d.ts" />
/// <reference path="./lib/react.d.ts" />
/// <reference path="./lib/react/jsx-runtime.d.ts" />
/// <reference path="./lib/react/native.d.ts" />
/// <reference path="./lib/react/types.d.ts" />
/// <reference path="./lib/utils/callback.d.ts" />
/// <reference path="./lib/utils/discord.d.ts" />
/// <reference path="./lib/utils/error.d.ts" />
/// <reference path="./lib/utils/object.d.ts" />
/// <reference path="./lib/utils/promise.d.ts" />
/// <reference path="./lib/utils/proxy.d.ts" />
/// <reference path="./lib/utils/react.d.ts" />
/// <reference path="./lib/utils/tree.d.ts" />
/// <reference path="./lib/utils/types.d.ts" />

declare module '@valenced/assets' {
    export * from '#lib/assets'
}

declare module '@valenced/assets/types' {
    export * from '#lib/assets/types'
}

declare module '@valenced/components' {
    export * from '#lib/components'
}

declare module '@valenced/components/FormSwitch' {
    export * from '#lib/components/FormSwitch'
    export { default } from '#lib/components/FormSwitch'
}

declare module '@valenced/components/Page' {
    export * from '#lib/components/Page'
    export { default } from '#lib/components/Page'
}

declare module '@valenced/components/SearchInput' {
    export * from '#lib/components/SearchInput'
    export { default } from '#lib/components/SearchInput'
}

declare module '@valenced/components/TableRowAssetIcon' {
    export * from '#lib/components/TableRowAssetIcon'
    export { default } from '#lib/components/TableRowAssetIcon'
}

declare module '@valenced/components/types' {
    export * from '#lib/components/types'
}

declare module '@valenced/discord/actions' {
    export * from '#lib/discord/actions'
}

declare module '@valenced/discord/common/app-start-performance' {
    export * from '#lib/discord/common/app-start-performance'
}

declare module '@valenced/discord/common/constants' {
    export * from '#lib/discord/common/constants'
}

declare module '@valenced/discord/common/flux' {
    export * from '#lib/discord/common/flux'
}

declare module '@valenced/discord/common/import-tracker' {
    export * from '#lib/discord/common/import-tracker'
}

declare module '@valenced/discord/common/logger' {
    export * from '#lib/discord/common/logger'
}

declare module '@valenced/discord/common/tokens' {
    export * from '#lib/discord/common/tokens'
}

declare module '@valenced/discord/common/utils' {
    export * from '#lib/discord/common/utils'
}

declare module '@valenced/discord/design' {
    export * from '#lib/discord/design'
}

declare module '@valenced/discord/flux' {
    export * from '#lib/discord/flux'
}

declare module '@valenced/discord/modules/main_tabs_v2' {
    export * from '#lib/discord/modules/main_tabs_v2'
}

declare module '@valenced/discord/modules/settings' {
    export * from '#lib/discord/modules/settings'
}

declare module '@valenced/discord/modules/settings/renderer' {
    export * from '#lib/discord/modules/settings/renderer'
}

declare module '@valenced/discord/native' {
    export * from '#lib/discord/native'
}

declare module '@valenced/discord/types' {
    export * from '#lib/discord/types'
}

declare module '@valenced/discord/utils/modules/finders' {
    export * from '#lib/discord/utils/modules/finders'
}

declare module '@valenced/discord/utils/modules/metro/subscriptions' {
    export * from '#lib/discord/utils/modules/metro/subscriptions'
}

declare module '@valenced/externals/browserify' {
    export * from '#lib/externals/browserify'
}

declare module '@valenced/externals/gorhom' {
    export * from '#lib/externals/gorhom'
}

declare module '@valenced/externals/react-native-clipboard' {
    export * from '#lib/externals/react-native-clipboard'
}

declare module '@valenced/externals/react-native-community' {
    export * from '#lib/externals/react-native-community'
}

declare module '@valenced/externals/react-native-safe-area-context' {
    export * from '#lib/externals/react-native-safe-area-context'
}

declare module '@valenced/externals/react-navigation' {
    export * from '#lib/externals/react-navigation'
}

declare module '@valenced/externals/shopify' {
    export * from '#lib/externals/shopify'
}

declare module '@valenced/externals/zustand' {
    export * from '#lib/externals/zustand'
}

declare module '@valenced/json-storage' {
    export * from '#lib/json-storage'
}

declare module '@valenced/json-storage/types' {
    export * from '#lib/json-storage/types'
}

declare module '@valenced/modules/finders' {
    export * from '#lib/modules/finders'
}

declare module '@valenced/modules/finders/filters' {
    export * from '#lib/modules/finders/filters'
}

declare module '@valenced/modules/metro' {
    export * from '#lib/modules/metro'
}

declare module '@valenced/modules/native' {
    export * from '#lib/modules/native'
}

declare module '@valenced/modules/native/app' {
    export * from '#lib/modules/native/app'
}

declare module '@valenced/modules/native/fs' {
    export * from '#lib/modules/native/fs'
}

declare module '@valenced/modules/types' {
    export * from '#lib/modules/types'
}

declare module '@valenced/patcher' {
    export * from '#lib/patcher'
}

declare module '@valenced/patcher/types' {
    export * from '#lib/patcher/types'
}

declare module '@valenced/plugins/constants' {
    export * from '#lib/plugins/constants'
}

declare module '@valenced/plugins/types' {
    export * from '#lib/plugins/types'
}

declare module '@valenced/plugins/utils' {
    export * from '#lib/plugins/utils'
}

declare module '@valenced/react' {
    export * from '#lib/react'
}

declare module '@valenced/react/jsx-runtime' {
    export * from '#lib/react/jsx-runtime'
}

declare module '@valenced/react/native' {
    export * from '#lib/react/native'
}

declare module '@valenced/react/types' {
    export * from '#lib/react/types'
}

declare module '@valenced/utils/callback' {
    export * from '#lib/utils/callback'
}

declare module '@valenced/utils/discord' {
    export * from '#lib/utils/discord'
}

declare module '@valenced/utils/error' {
    export * from '#lib/utils/error'
}

declare module '@valenced/utils/object' {
    export * from '#lib/utils/object'
}

declare module '@valenced/utils/promise' {
    export * from '#lib/utils/promise'
}

declare module '@valenced/utils/proxy' {
    export * from '#lib/utils/proxy'
}

declare module '@valenced/utils/react' {
    export * from '#lib/utils/react'
}

declare module '@valenced/utils/tree' {
    export * from '#lib/utils/tree'
}

declare module '@valenced/utils/types' {
    export * from '#lib/utils/types'
}
