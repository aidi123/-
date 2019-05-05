import Vue from 'vue'
import Router from 'vue-router'
//登录
import Login from '@/components/Login'
import VerificationCodeLogin from '@/components/VerificationCodeLogin'
import Register from '@/components/Register'
import Agreement from '@/components/Agreement'

//底部导航
import Tabbar from '@/components/view/Tabbar'
import Home from '@/components/view/Home'
// import Home1 from '@/components/view/Home1'
import Release from '@/components/view/Release'
import Recreation from '@/components/view/Recreation'
import My from '@/components/view/My'
import School from '@/components/view/School'
import ShoppingCart from '@/components/view/ShoppingCart'

//发布
import Choose from '@/components/view/release/Choose'
import Recruitment from '@/components/view/release/Recruitment'
import Job from '@/components/view/release/Job'

//首页
import Merchandise from '@/components/view/home/Merchandise'
import Evaluate from '@/components/view/home/Evaluate'
import Shop from '@/components/view/home/Shop'
import EvaluationDetails from '@/components/view/home/EvaluationDetails'
import Activity from '@/components/view/home/Activity'
import Wholesale from '@/components/view/home/Wholesale'
import Report from '@/components/view/home/Report'
import BeerSkittles from '@/components/view/home/BeerSkittles'
import Galleria from '@/components/view/home/Galleria'
import Sousou from '@/components/view/home/Sousou'
import Audioupload from '@/components/view/home/Audioupload'
import FlashSales from '@/components/view/home/FlashSales'
import FlashSalesCart from '@/components/view/home/FlashSalesCart'



import Newshop from '@/components/view/home/Newshop'
// SouActivity
import SouActivity from '@/components/view/home/SouActivity'

//我的
import Setting from '@/components/view/my/Setting'
import PersonalInformation from '@/components/view/my/PersonalInformation'
import SocialMediaAccount from '@/components/view/my/SocialMediaAccount'
import ChangePhone from '@/components/view/my/ChangePhone'
import ChangePassword from '@/components/view/my/ChangePassword'
import Notification from '@/components/view/my/Notification'
import General from '@/components/view/my/General'
import About from '@/components/view/my/About'
import UserAgreement from '@/components/view/my/UserAgreement'
import CustomerService from '@/components/view/my/CustomerService'
import MyRelease from '@/components/view/my/MyRelease'
import MyEvaluation from '@/components/view/my/MyEvaluation'
import MyFavorite from '@/components/view/my/MyFavorite'
import MyFavoriteManage from '@/components/view/my/MyFavoriteManage'
import Hongbao from '@/components/view/my/Hongbao'
import MyRecord from '@/components/view/my/MyRecord'
import RechargeRecord from '@/components/view/my/RechargeRecord'
import Withdrawal from '@/components/view/my/Withdrawal'
import BindBank from '@/components/view/my/BindBank'
import MyOrder from '@/components/view/my/MyOrder' //所有订单
import BuyOrder from '@/components/view/my/BuyOrder' //购买确认订单
import ReceivingAddress from '@/components/view/my/ReceivingAddress' //地址列表
import EditAddress from '@/components/view/my/EditAddress' //编辑地址
import ChooseAddress from '@/components/view/my/ChooseAddress' //选择地址


//娱乐吐槽
import Publish from '@/components/view/recreation/Publish'
import PublishShow from '@/components/view/recreation/PublishShow'
import Comments from '@/components/view/recreation/Comments'
import UnreadMessage from '@/components/view/recreation/UnreadMessage'
import CommentDetails from '@/components/view/recreation/CommentDetails'
//地图
import Maps from '@/components/Maps'
//活动页
import CreativeActivity from '@/components/view/creativeActivity/CreativeActivity'
import ReleaseNew from '@/components/view/creativeActivity/ReleaseNew'
import Preview from '@/components/view/creativeActivity/Preview'
import SaveActivity from '@/components/view/creativeActivity/SaveActivity'
import Activitylist from '@/components/view/creativeActivity/activitylist'
import Leaflets from '@/components/view/creativeActivity/leaflets'
import LeafletsCreative from '@/components/view/creativeActivity/LeafletsCreative'
import LeafletOneNew from '@/components/view/creativeActivity/LeafletOneNew'

import Leafletpreview from '@/components/view/creativeActivity/Leafletpreview'
import LeafletsCreativeTwo from '@/components/view/creativeActivity/LeafletsCreativeTwo'
import LeafletsCreativeNew from '@/components/view/creativeActivity/LeafletsCreativeNew'
import CreateKanJia from '@/components/view/creativeActivity/CreateKanJia'
import KanJia from '@/components/view/creativeActivity/KanJia'
import KanjiaPreview from '@/components/view/creativeActivity/KanjiaPreview'

// 红包充值
import Recharge from '@/components/view/creativeActivity/Recharge'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { path: '*', redirect: '/home' },
    {
      path: '/verificationCodeLogin',
      name: 'VerificationCodeLogin',
      component: VerificationCodeLogin
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement
    },
    {
      path: '/tabbar',
      name: 'Tabbar',
      component: Tabbar,
      children: [{
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/release',
        name: 'Release',
        component: Release
      },
      {
        path: '/school',
        name: 'School',
        component: School
      },
      {
        path: '/my',
        name: 'My',
        component: My
      },
      {
        path: '/ShoppingCart',
        name: 'ShoppingCart',
        component: ShoppingCart
      }
      ]
    },
    {
      path: '/recreation',
      name: 'Recreation',
      component: Recreation
    },
    {
      path: '/release/Choose',
      name: 'Choose',
      component: Choose
    },
    {
      path: '/release/recruitment',
      name: 'Recruitment',
      component: Recruitment
    },
    {
      path: '/release/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/home/merchandise/:id',
      name: 'Merchandise',
      component: Merchandise
    },
    {
      path: '/home/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/home/wholesale',
      name: 'Wholesale',
      component: Wholesale
    },
    {
      path: '/home/evaluate',
      name: 'Evaluate',
      component: Evaluate
    },
    {
      path: '/home/shop/:id',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/home/evaluationdetails',
      name: 'EvaluationDetails',
      component: EvaluationDetails
    },
    {
      path: '/home/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/home/beerskittles',
      name: 'BeerSkittles',
      component: BeerSkittles
    },
    {
      path: '/home/galleria',
      name: 'Galleria',
      component: Galleria
    },
    {
      path: '/home/sousou/:id',
      name: 'Sousou',
      component: Sousou
    },
    {
      path: '/home/souactivity/:id',
      name: 'SouActivity',
      component: SouActivity
    },
    {
      path: '/home/Newshop',
      name: 'Newshop',
      component: Newshop
    },
    {
      path: '/home/audioupload',
      name: 'Audioupload',
      component: Audioupload
    },
    {
      path: '/home/flashsales',
      name: 'FlashSales',
      component: FlashSales
    }, 
    {
      path: '/home/FlashSalesCart/:id',
      name: 'FlashSalesCart',
      component: FlashSalesCart
    }, 
    {
      path: '/my/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/my/personalinformation',
      name: 'PersonalInformation',
      component: PersonalInformation
    },
    {
      path: '/my/socialmediaaccount',
      name: 'SocialMediaAccount',
      component: SocialMediaAccount
    },
    {
      path: '/my/changephone',
      name: 'ChangePhone',
      component: ChangePhone
    },
    {
      path: '/my/changepassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/my/notification',
      name: 'Notification',
      component: Notification
    },
    {
      path: '/my/general',
      name: 'General',
      component: General
    },
    {
      path: '/my/about',
      name: 'About',
      component: About
    },
    {
      path: '/my/useragreement',
      name: 'UserAgreement',
      component: UserAgreement
    },
    {
      path: '/my/customerservice',
      name: 'CustomerService',
      component: CustomerService
    },
    {
      path: '/my/myrelease',
      name: 'MyRelease',
      component: MyRelease
    },
    {
      path: '/my/myevaluation',
      name: 'MyEvaluation',
      component: MyEvaluation
    },
    {
      path: '/my/myfavorite',
      name: 'MyFavorite',
      component: MyFavorite
    },
    {
      path: '/my/myfavoritemanage',
      name: 'MyFavoriteManage',
      component: MyFavoriteManage
    },
    {
      path: '/my/hongbao',
      name: 'Hongbao',
      component: Hongbao
    },
    {
      path: '/my/myrecord',
      name: 'MyRecord',
      component: MyRecord
    },
    {
      path: '/my/rechargeRecord',
      name: 'RechargeRecord',
      component: RechargeRecord
    },
    {
      path: '/my/withdrawal',
      name: 'Withdrawal',
      component: Withdrawal
    }, 
    {
      path: '/my/bindBank',
      name: 'BindBank',
      component: BindBank
    }, 
    {
      path: '/my/myOrder',
      name: 'MyOrder',
      component: MyOrder
    },
    {
      path: '/my/BuyOrder/:id',
      name: 'BuyOrder',
      component: BuyOrder
    },
    {
      path: '/my/ReceivingAddress',
      name: 'ReceivingAddress',
      component: ReceivingAddress
    },
    {
      path: '/my/EditAddress/:id',
      name: 'EditAddress',
      component: EditAddress
    },
    {
      path: '/my/ChooseAddress',
      name: 'ChooseAddress',
      component: ChooseAddress
    },
    {
      path: '/recreation/publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/recreation/publishshow',
      name: 'PublishShow',
      component: PublishShow
    },
    {
      path: '/recreation/comments',
      name: 'Comments',
      component: Comments
    },
    {
      path: '/recreation/unreadmessage',
      name: 'UnreadMessage',
      component: UnreadMessage
    },
    {
      path: '/recreation/commentdetails',
      name: 'CommentDetails',
      component: CommentDetails
    },
    {
      path:'/creativeActivity/creativeActivity',
      name:'CreativeActivity',
      component:CreativeActivity
    },
    {
      path:'/creativeActivity/releaseNew/:id',
      name:'ReleaseNew',
      component:ReleaseNew
    },
    {
      path:'/creativeActivity/preview/:id',
      name:'Preview',
      component:Preview
    },
    {
      path:'/creativeActivity/saveactivity/:id',
      name:'SaveActivity',
      component:SaveActivity
    },
    {
      path:'/creativeActivity/activitylist',
      name:'Activitylist',
      component:Activitylist
    },
    {
      path:'/creativeActivity/leaflets/:id',
      name:'Leaflets',
      component:Leaflets
    },
    {
      path:'/creativeActivity/leafletscreative/:id',
      name:'LeafletsCreative',
      component:LeafletsCreative
    },
    {
      path:'/creativeActivity/leafletonenew/:id',
      name:'LeafletOneNew',
      component:LeafletOneNew
    },
    {
      path:'/creativeActivity/leafletpreview/:id',
      name:'Leafletpreview',
      component:Leafletpreview
    },
    {
      path:'/creativeActivity/leafletscreativetwo/:id',
      name:'LeafletsCreativeTwo',
      component:LeafletsCreativeTwo
    },
    {
      path:'/creativeActivity/LeafletsCreativeNew/:id',
      name:'LeafletsCreativeNew',
      component:LeafletsCreativeNew
    },
    {
      path:'/creativeActivity/CreateKanJia/:id',
      name:'CreateKanJia',
      component:CreateKanJia
    },
    {
      path:'/creativeActivity/KanJia/:id',
      name:'KanJia',
      component:KanJia
    },
    {
      path:'/creativeActivity/KanjiaPreview/:id',
      name:'KanjiaPreview',
      component:KanjiaPreview
    },
    
    {
      path:'/creativeActivity/Recharge/:id',
      name:'Recharge',
      component:Recharge
    },
    
  ]

})
