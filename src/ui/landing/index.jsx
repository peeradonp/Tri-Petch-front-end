import InfoHandler from "../../components/info-handler"

const LandingPage = () => {
    return (
        <div className='overflow-hidden'>
            <InfoHandler
                name={"ATHLETES"}
                image={"player_1"}
                option={[
                    {
                        title: "CONNECTION",
                        detail: "Connect with coaches directly, you can ping coaches to view profile.",
                        bg: "#FFFFFF"
                    },
                    {
                        title: "COLLABORATION",
                        detail: "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
                        bg: "#F5F4F9"
                    },
                    {
                        title: "GROWTH",
                        detail: "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
                        bg: "#5E3DB3"
                    }
                ]}
                isReserved={false}
            />
            <InfoHandler
                name={"PLAYERS"}
                image={"player_2"}
                option={[
                    {
                        title: "CONNECTION",
                        detail: "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
                        bg: "#FFFFFF"
                    },
                    {
                        title: "COLLABORATION",
                        detail: "Work with recruiter to increase your chances of finding talented athlete.",
                        bg: "#F5F4F9"
                    },
                    {
                        title: "GROWTH",
                        detail: "Save your time, recruit proper athlets for your team.",
                        bg: "#090C35"
                    }
                ]}
                isReserved
                offsetHeaderImage
            />
        </div>
    )
}

export default LandingPage
