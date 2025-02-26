<template>
    <div class='join-us-container'>
        <div class="left">
            <div class="top">
                <div class="title">
                    联系方式
                </div>
                <div class="card">
                    <div class="item">
                        <div class="icon">
                            <img src="@/assets/images/joinus/icon1.svg" alt="">
                        </div>
                        <div class="text">inquiries@theicsi.com</div>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <img src="@/assets/images/joinus/icon2.svg" alt="">
                        </div>
                        <div class="text">+632 8538 5155</div>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <img src="@/assets/images/joinus/icon3.svg" alt="">
                        </div>
                        <div class="text">L24 Philippine Stock Exchange Tower, One Bonifacio High Street, 5th Ave. cor.
                            28th St. BGC, Taguig City, Philippines 1630</div>
                    </div>
                </div>
            </div>
            <div class="join-list">
                <div class="pic"></div>
                <div class="list-container">
                    <div class="join-item" v-for="(job, index) in data.jobList" :key="index"
                        @click="selectThisJob(job)">
                        <div class="job-top">
                            <div class="job-title subtitle">{{ job.jobName }}</div>
                            <div class="job-xz">{{ job.jobSalary }}</div>
                        </div>
                        <div class="bottom">
                            <div class="text">{{ job.jobExperience }}</div>
                        </div>
                    </div>
                    <!-- <div class="join-item">
                        <div class="job-top">
                            <div class="job-title subtitle">高级产品经理</div>
                            <div class="job-xz">25K - 35K</div>
                        </div>
                        <div class="bottom">
                            <div class="text">北京 3-5年经验 本科及以上</div>
                        </div>
                    </div>
                    <div class="join-item">
                        <div class="job-top">
                            <div class="job-title subtitle">高级产品经理</div>
                            <div class="job-xz">25K - 35K</div>
                        </div>
                        <div class="bottom">
                            <div class="text">北京 3-5年经验 本科及以上</div>
                        </div>
                    </div>
                    <div class="join-item">
                        <div class="job-top">
                            <div class="job-title subtitle">高级产品经理</div>
                            <div class="job-xz">25K - 35K</div>
                        </div>
                        <div class="bottom">
                            <div class="text">北京 3-5年经验 本科及以上</div>
                        </div>
                    </div>
                    <div class="join-item">
                        <div class="job-top">
                            <div class="job-title subtitle">高级产品经理</div>
                            <div class="job-xz">25K - 35K</div>
                        </div>
                        <div class="bottom">
                            <div class="text">北京 3-5年经验 本科及以上</div>
                        </div>
                    </div>
                    <div class="join-item">
                        <div class="job-top">
                            <div class="job-title subtitle">高级产品经理</div>
                            <div class="job-xz">25K - 35K</div>
                        </div>
                        <div class="bottom">
                            <div class="text">北京 3-5年经验 本科及以上</div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="right">
            <div class="title">{{ data.jobNow.jobName }}</div>
            <div class="card">
                <div class="subtitle">职位描述</div>
                <div class="content">
                    <p v-for="(jobDescription, index) in data.jobNow.jobDescription" :key="index">{{ jobDescription }}
                    </p>
                    <!-- <p>2. 深入分析用户需求，持续优化产品体验；</p>
                    <p>3. 主导产品从概念到落地的整个过程，协调各方资源推进项目进展；</p>
                    <p>4. 跟踪产品数据，分析用户行为，持续改进产品；</p>
                    <p>5. 关注行业动态，研究竞品，提出创新的产品方案。</p> -->
                </div>
            </div>
            <div class="card">
                <div class="subtitle">岗位要求</div>
                <div class="content">
                    <p v-for="(jobRequirements, index) in data.jobNow.jobRequirements" :key="index">
                        {{ jobRequirements }}</p>
                    <!-- <p>2. 具备优秀的产品思维，善于发现和解决问题；</p>
                    <p>3. 良好的沟通能力和项目管理能力；</p>
                    <p>4. 熟悉产品开发流程，有较强的执行力；</p>
                    <p>5. 有 ToB 产品经验优先。</p> -->

                </div>
            </div>
            <div class="card">
                <div class="subtitle">
                    我们提供
                </div>
                <div class="content grid">
                    <div class="content-item">
                        <div class="icon ">
                            <img src="@/assets/images/joinus/icon11.svg" alt="">
                        </div>
                        <div class="text">优质的办公环境</div>
                    </div>
                    <div class="content-item">
                        <div class="icon ">
                            <img src="@/assets/images/joinus/icon12.svg" alt="">
                        </div>
                        <div class="text">完善的培训体系</div>
                    </div>
                    <div class="content-item">
                        <div class="icon ">
                            <img src="@/assets/images/joinus/icon13.svg" alt="">
                        </div>
                        <div class="text">广阔的发展空间</div>
                    </div>
                    <div class="content-item">
                        <div class="icon ">
                            <img src="@/assets/images/joinus/icon14.svg" alt="">
                        </div>
                        <div class="text">丰厚的薪资福利</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = reactive({
    jobList: [],
    jobNow: {}
})
const selectThisJob = (job) => {
    data.jobNow = job
}
onMounted(() => {
    fetch('job.json').then(res => res.json()).then(res => {
        data.jobList = res.jobList
        data.jobNow = res.jobList[0]
    })
})


</script>
<style scoped lang='scss'>
.title {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    color: #000000;
}

.content,
.text {
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    color: #4B5563;
}

.subtitle {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: #000000;
}

.join-us-container {
    width: 1240px;
    margin: 60px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;

    .left {
        display: flex;
        flex-direction: column;

        .top {
            border-radius: 12px;
            background-color: #ffffff;
            padding: 24px;
            height: 188px;

            .card {
                margin-top: 18px;
                display: flex;
                flex-direction: column;

                .item {
                    margin-top: 12px;
                    display: flex;
                    align-items: center;

                    .icon {
                        width: 24px;
                        height: 24px;
                        // background-color: #008080;
                        margin-right: 12px;

                        img {
                            height: 24px;
                        }
                    }

                    .text {
                        flex: 1;
                    }
                }
            }
        }

        .join-list {
            flex: 1;
            margin-top: 25px;
            background-color: #ffffff;
            border-radius: 12px;
            padding: 24px;

            .pic {
                height: 240px;
                border-radius: 12px;
                background-image: url('@/assets/images/joinus/bg.jpg');
                background-size: cover;
                background-position: center;
            }

            .list-container {
                margin-top: 24px;

                .join-item {
                    border-radius: 12px;
                    padding: 16px;
                    background: #F9FAFB;
                    display: flex;
                    flex-direction: column;
                    margin-top: 16px;
                    cursor: pointer;

                    .job-top {
                        display: flex;
                        justify-content: space-between;

                        .job-xz {
                            font-size: 16px;
                            font-weight: normal;
                            line-height: 24px;
                            color: #008080;
                        }
                    }

                    .bottom {
                        margin-top: 8px;
                    }
                }
            }

        }
    }

    .right {
        background-color: #ffffff;
        border-radius: 12px;
        padding: 32px;

        .card {
            margin-top: 39px;

            .subtitle {
                margin-bottom: 16px;
            }

            .content.grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-row-gap: 16px;
                grid-column-gap: 16px;

                .content-item {
                    height: 56px;
                    display: flex;
                    align-items: center;
                    background: #F9FAFB;
                    border-radius: 12px;
                    padding: 0 16px;
                    

                    .icon {
                        width: 16px;
                        height: 16px;
                        margin-right: 12px;

                        img {
                            height: 16px;
                        }
                    }
                }
            }
        }
    }
}
</style>