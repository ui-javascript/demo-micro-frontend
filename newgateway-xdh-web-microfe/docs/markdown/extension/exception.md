<script>
  import Xdh403 from 'E/exception/xdh-403'
  import Xdh404 from 'E/exception/xdh-404'
  import Xdh500 from 'E/exception/xdh-500'
  export default {
    components: {
      Xdh403,
      Xdh404,
      Xdh500
    }
  }
</script>

## 异常页面
### 403 异常页面
:::demo
```html
<template>
  <xdh-403></xdh-403>
</template>

<script>
  import Xdh403 from 'E/exception/xdh-403'

  export default {
    components: {
      Xdh403
    }
  }
</script>
```
:::

### 404 异常页面
:::demo
```html
<template>
  <xdh-404></xdh-404>
</template>

<script>
  import Xdh404 from 'E/exception/xdh-404'

  export default {
    components: {
      Xdh404
    }
  }
</script>
```
:::

### 500 异常页面
:::demo
```html
<template>
  <xdh-500></xdh-500>
</template>

<script>
  import Xdh500 from 'E/exception/xdh-500'

  export default {
    components: {
      Xdh500
    }
  }
</script>
```
:::
