import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import {makeStyles}  from '@material-ui/core/styles';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';
import Avartar from '@material-ui/core/Divider';
import Heart from '@material-ui/icons/FavoriteBorder';
import HeartAdapted from '@material-ui/icons/Favorite';
const useStyles = makeStyles(muiBaseTheme => ({
      card:{
        borderColor: 'grey',
        marginTop : '5%'       
      },

      divider: {
        margin: `${muiBaseTheme.spacing.unit}px 0`
      },

      panel:{
        overflowWrap: "break-word", 
        width : "500px"  ,
        borderRadius : 0,
      },

      head : {
          paddingTop: '3%',
          textAlign : 'left',
          marginLeft : '5%'
      },

      content :{
          textAlign : 'left',
          marginLeft : '1.5%',
          fontSize : '19px'
      },
      
      bottom :{
          marginTop : '1%',
          textAlign : 'left',
          color : 'red',
          marginLeft : '4.9%',
          marginBottom : '2%'
        
      }
  }))
  

const Recent = () => {
        const classes = useStyles()
        return(
        <div>
            <h2>최근 포스트</h2>
            <div className = {classes.card}>
            <Grid container  spacing = {4} >
                <Grid item  xs = {6}>
                    <ExpansionPanel className={classes.panel}>
                       
                        <Card>
                            <CardMedia className = {classes.head}> 
                                오현재
                            </CardMedia>
                            <Divider className = {classes.divider}></Divider>
                            <CardContent className = {classes.content}>
                            padding을 아주 조금  잘못 잡거나 여러 회색 그림자 사이에 구별을 하지 않아서 여러분의 동료 디자이너에게 나에게 혼나볼래라는 표정을 마지막으로 본 적이 언제인가요? ( #eee와 #efefef는 다릅니다. 제가 듣기에 말이죠. 조만간 그 이유를 알아보려고 해요.)

UI 라이브러리를 만드는 목적 중에 하나는 디자인과 개발 팀 간의 관계를 향상시키는 것입니다. 프론트엔드 개발자들은 API를 이용해서 디자이너와 현재 한동안 협업을 해오고 있으며 API 내용을 구축을 능숙하게 합니다. 그렇지만 어떤 이유에서 인지 디자인 팀과 협업하는 동안 그대로 흘러가지 않습니다. 생각해 보면, 거기에는 UI 요소를 언급하는 한정된 내용만 들어 있는 데 말이죠. Heading 컴포넌트를 디자인한다고 예를 들면, 크기는 h1과 h6 안에 있을 것이고, bold나 이탤릭, 혹은 밑줄일 것입니다. 코드로 작성하기에 뻔하겠죠.
                            </CardContent>
                            <Divider className = {classes.divider}></Divider>
                            <div className = {classes.bottom}>
                                <Heart></Heart>
                            </div>
                        </Card>
                    </ExpansionPanel>
                    {/*<Paper className = {classes.paper}><div style = {{textOverflow:'ellipsis'}}>dddddddddddddddddd</div></Paper>*/}
                </Grid>
                <Grid item  xs = {6}>
                <ExpansionPanel className = {classes.panel}>
                        <Card>
                            <CardMedia className = {classes.head}> 
                                오현재
                            </CardMedia>
                            <Divider className = {classes.divider}></Divider>
                            <CardContent className = {classes.content}>
                            The field of user experience has gained significant popularity in recent years. While companies like FreeCodeCamp and 42 are offering free options for people to learn how to code, learning UX doesn’t seem to have the same support network for self-motivated and driven individuals.
I often encounter discussions on UX forums and (sometimes heated) debates on UX education accessibility on my LinkedIn feed, with people asking how to get a quality education in this space if one does not have the funds for tuition. People looking to break into the field professionally often contemplate going to school for a UX related degree like Human Computer Interaction, Interaction Design, Psychology, or even taking (an often times unaccredited and pricy) boot camp. After reading an article by David Venturi on how he created his own affordable Data Science Master’s program using online resources through platforms such as EdX, Coursera and Udacity to gain access to material from world class institutions such as Harvard, Stanford, M.I.T and Johns Hopkins University, I was inspired to create a similar framework for UX design.
                            </CardContent>
                            <Divider className = {classes.divider}></Divider>
                            <div className = {classes.bottom}>
                                <Heart></Heart>
                            </div>
                        </Card>
                    </ExpansionPanel>
                </Grid> 
                <Grid item  xs = {6}>
                <ExpansionPanel className = {classes.panel}>
                        <Card>
                            <CardMedia className = {classes.head}> 
                                오현재
                            </CardMedia>
                            <Divider className = {classes.divider}></Divider>
                            <CardContent className = {classes.content}>
                            그리드 시스템
디자인 프로젝트를 시작하기 전, 첫 번째 단계는 어떻게 그리드 구조 잡을지를 이해하는 것입니다. 다수의 앱에서는 임의로 작업되지요. 그렇게 되면 간격 체계가 마구잡이가 되어 버리고, 개발자들이 어느 간격을 기준으로 적용할지 판단이 서지 않습니다. 그러니 하나의 구조를 고르세요! 이에 대해 처음 읽었을 때, 4px - 8px 그리드 구조에 빠져들었습니다. 그 구조를 고수하니 많은 스타일 이슈를 단순화하는 데 도움이 되더군요.
                            </CardContent>
                            <Divider className = {classes.divider}></Divider>
                            <div className = {classes.bottom}>
                                <Heart></Heart>
                            </div>
                        </Card>
                    </ExpansionPanel>
                </Grid> <Grid item  xs = {6}>
                <ExpansionPanel className = {classes.panel}>
                        <Card>
                            <CardMedia className = {classes.head}> 
                                오현재
                            </CardMedia>
                            <Divider className = {classes.divider}></Divider>
                            <CardContent className = {classes.content}>
                            The field of user experience has gained significant popularity in recent years. While companies like FreeCodeCamp and 42 are offering free options for people to learn how to code, learning UX doesn’t seem to have the same support network for self-motivated and driven individuals.
I often encounter discussions on UX forums and (sometimes heated) debates on UX education accessibility on my LinkedIn feed, with people asking how to get a quality education in this space if one does not have the funds for tuition. People looking to break into the field professionally often contemplate going to school for a UX related degree like Human Computer Interaction, Interaction Design, Psychology, or even taking (an often times unaccredited and pricy) boot camp. After reading an article by David Venturi on how he created his own affordable Data Science Master’s program using online resources through platforms such as EdX, Coursera and Udacity to gain access to material from world class institutions such as Harvard, Stanford, M.I.T and Johns Hopkins University, I was inspired to create a similar framework for UX design.
                            </CardContent>
                            <Divider className = {classes.divider}></Divider>
                            <div className = {classes.bottom}>
                                <Heart></Heart>
                            </div>
                        </Card>
                    </ExpansionPanel>
                </Grid> 
            </Grid>
            </div>
            </div>
        );
    }


export default Recent;