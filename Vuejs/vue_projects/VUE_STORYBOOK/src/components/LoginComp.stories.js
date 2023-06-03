import LoginComp from "./LoginComp.vue"

//  import 'bootstrap/dist/css/bootstrap.css'
//  import 'bootstrap-vue/dist/bootstrap-vue.css'

export default{
    title: 'LoginComp',
    component: LoginComp,
};

let Template = (args, {argTypes})=>({
    props:Object.keys(argTypes),
    components: {LoginComp},
    template:'<LoginComp/>'
})
export let Primary = Template.bind({})

Primary.args = {
    loginData:{
        email:"",
        password:"",
    },
}