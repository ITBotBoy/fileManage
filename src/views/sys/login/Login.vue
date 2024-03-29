<template>
    <div class="login">
        <div class="login-mask"/>
        <div class="login-form-wrap">
            <div class="login-form mx-6">
                <div class="login-form__content px-2 py-10">
                    <header>
                        <img src="/@/assets/images/logo.jpg" class="mr-4"/>
                        <h1>{{ title }}</h1>
                    </header>

                    <a-form class="mx-auto mt-10" :model="formData" :rules="formRules" ref="formRef">
                        <a-form-item name="username">
                            <a-input size="large" v-model:value="formData.username" placeholder="请输入账号"/>
                        </a-form-item>
                        <a-form-item name="password">
                            <a-input-password
                                size="large"
                                visibilityToggle
                                v-model:value="formData.password"
                                placeholder="请输入密码"
                            />
                        </a-form-item>
                        <a-row>
                            <a-col :span="12">
                                <a-form-item>
                                    <a-checkbox v-model:checked="autoLogin" size="small">自动登录</a-checkbox>
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                            </a-col>
                        </a-row>
                        <a-form-item>
                            <a-button
                                type="primary"
                                size="large"
                                class="rounded-sm"
                                :block="true"
                                @click="login"
                                :loading="formState.loading"
                            >登录
                            </a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {
    defineComponent,
    reactive,
    ref,
    unref,
    toRaw,
} from 'vue';
import {Checkbox} from 'ant-design-vue';
import Button from '/@/components/Button/index.vue';
import {userStore} from '/@/store/modules/user';
import {useMessage} from '/@/hooks/web/useMessage';
import {useSetting} from '/@/hooks/core/useSetting';

export default defineComponent({
    components: {
        AButton: Button,
        ACheckbox: Checkbox,
    },
    setup() {
        const formRef = ref<any>(null);
        const autoLoginRef = ref(false);
        const {globSetting} = useSetting();
        const {notification} = useMessage();
        const formData = reactive({
            username: '',
            password: '',
        });
        const formState = reactive({
            loading: false,
        });

        const formRules = {
            username: [{required: true, message: '请输入账号', trigger: 'blur'}],
            password: [{required: true, message: '请输入密码', trigger: 'blur'}],
        };

        async function handleLogin() {
            const form = unref(formRef);
            if (!form) return;
            formState.loading = true;
            try {
                const data = await form.validate();
                const userInfo = await userStore.login(
                    toRaw({
                        password: data.password,
                        username: data.username,
                    })
                );
                if (userInfo) {
                    notification.success({
                        message: '登录成功',
                        description: `欢迎回来: ${userInfo.username}`,
                        duration: 3,
                    });
                }
            } catch (error) {
            } finally {
                formState.loading = false;
            }
        }

        return {
            formRef,
            formData,
            formState,
            formRules,
            login: handleLogin,
            autoLogin: autoLoginRef,
            title: globSetting && globSetting.title,
        };
    },
});
</script>
<style lang="less" scoped>
@import (reference) '../../../design/index.less';

.login {
    position: relative;
    height: 100vh;
    background: url(../../../assets/images/login/login-bg.png) no-repeat;
    background-size: 100% 100%;

    &-mask {
        display: none;
        height: 100%;
        /*background: url(../../../assets/images/login/login-in.png) no-repeat;
        background-position: 50% 30%;
        background-size: 80% 80%;*/

        .respond-to(xlarge, {
            display: block;
        });
    }

    &-form {
        width: 520px;
        background: @white;
        border: 10px solid rgba(255, 255, 255, 0.5);
        border-width: 8px;
        border-radius: 4px;
        background-clip: padding-box;
        .respond-to(xlarge, {
            margin: 0 120px 0 50px
        });

        &-wrap {
            position: absolute;
            top: 0;
            /*right: 0;*/
            display: flex;
            width: 100%;
            height: 90%;
            justify-content: center;
            align-items: center;
            .respond-to(large, {
                width: 600px;
                right: calc(50% - 300px);
            });
            .respond-to(xlarge, {
                width: 600px; /*right: 0*/
            });
        }

        &__content {
            width: 100%;
            height: 100%;
            border: 1px solid #999;
            border-radius: 2px;

            header {
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    display: inline-block;
                    width: 48px;
                }

                h1 {
                    margin-bottom: 0;
                    font-size: 24px;
                    // color: @primary-color;
                    text-align: center;
                }
            }

            form {
                width: 80%;
            }
        }
    }
}
</style>
