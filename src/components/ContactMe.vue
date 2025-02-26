<template>
    <div class="contact-btn" @click="dialogVisible = true">
        <div class="contact-btn-title">立即咨询</div>
    </div>
    <el-dialog v-model="dialogVisible" title="立即咨询" :before-close="handleClose">
        <div style="padding: 30px 30px 0px;">
            <el-form size="large" :rules="rules" :model="ruleForm" ref="formRef" label-width="auto"
                label-position="left">
                <el-form-item :label="$t('message.YourName')" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入您的称呼"></el-input>
                </el-form-item>
                <el-form-item :label="$t('message.YourConnectWay')" prop="email">
                    <el-input v-model="ruleForm.email" placeholder="请输入联系方式"></el-input>
                </el-form-item>
                <el-form-item :label="$t('message.YourQuestion')" prop="content">
                    <el-input v-model="ruleForm.content" placeholder="请输入需要咨询的问题" type="textarea" :rows="4"></el-input>
                </el-form-item>
            </el-form>
        </div>

        <template #footer>
            <div class="dialog-footer">
                <div class="send-btn" @click="sendEmail">
                    {{ $t('message.Send') }} </div>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import UseEmail from "@/hooks/useEmail.js"
import { ElMessageBox } from 'element-plus'

const { send } = UseEmail()
const dialogVisible = ref(false)

const ruleForm = reactive({ name: '', email: '', content: '' })

const rules = reactive({
    name: [
        { required: true, message: '请输入称呼', trigger: 'blur' },
    ],
    email: [
        { required: true, message: '请输入联系方式', trigger: 'blur' },
    ],
    content: [
        { required: true, message: '请输入需要咨询的问题', trigger: 'blur' },
    ],
})

const formRef = ref()
const sendEmail = () => {
    formRef.value.validate((valid, fields) => {
        if (valid) {
            send(ruleForm).then(() => {
                dialogVisible.value = false
                ElMessageBox.alert('邮件已发送成功，后续我们会联系您。')
                formRef.value.resetFields()
            })
        } else {
            console.log('error submit!', fields)
            formRef.value.resetFields()
        }
    })
}
</script>
<style scoped lang='scss'>
::v-deep {
    .el-dialog {
        padding: 20px;
    }
}

.dialog-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 0px;

}

.contact-btn {
    // width: 100px;
    background-color: #008080;
    text-align: center;
    position: fixed;
    right: 0px;
    top: 66%;
    z-index: 999;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 8px;
    font-size: 48px;
    padding: 10px 16px;
    display: flex;
    cursor: pointer;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.6);
}

.send-btn {
    width: 120px;
    height: 40px;
    font-size: 20px;
    background-color: #008080;
    color: #ffffff;
    border-radius: 20px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}
</style>