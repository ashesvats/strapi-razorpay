# Strapi Razorpay Plugin

## Installation

1. Add this to ./config/plugins file.

```
'razorpay': {
        enabled: true,
        resolve: './src/plugins/razorpay'
    },
```

## Setting Up Development Enviorment

##### 1. Clone this repo to your strapi project plugins directory. its src/plugins

GOTO your project root folder and type

```
cd src/plugins

git clone https://github.com/ashesvats/strapi-razorpay razorpay
```

##### 2. Install dependencies

```
yarn
```

##### 3. Compile Typescript

```
yarn build
```

This will generate a dist folder with compiled javascript code.

##### 4. Enable plugin

open src/config/plugins.ts file and add these lines to enable plugin.

```
'razorpay': {
        enabled: true,
        resolve: './src/plugins/razorpay'
    },
```

##### 5. Start Development Server with Live Reload

In the project root folder run

```
yarn develop --watch-admin
```

GOTO plugin root folder src/plugins/razorpay

```
yarn develop
```

this will listen to change in the plugin directory and compile it to typescript.
