import Vue from 'vue'
import axios from 'axios'

import { ENV_NUXT } from '../plugins/env'
import COMMON from '../plugins/common'

Vue.prototype.$http = axios
Vue.prototype.ENV_NUXT = ENV_NUXT
Vue.prototype.COMMON = COMMON
