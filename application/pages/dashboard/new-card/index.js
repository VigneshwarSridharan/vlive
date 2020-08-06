import { Carousel, CarouselItem, Button } from "reactstrap"
import { useState, useEffect } from "react";
import ThemeSelection from "./ThemeSelection";
import BasicDetails from "./BasicDetails";
import { ThemesServices, PlanService } from "../../../utils/APIService";
import { connect } from "react-redux";

const NewCard = props => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const items = ['THEME_SELECTION', 'BASIC_DETAILS'];
    const [themes, setThemes] = useState([])
    let { plan } = props

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    useEffect(() => { }, [
        PlanService.planDetails(plan.id).then(res => {
            setThemes(res.themes)
        })
    ])

    return (
        <section className="py-3">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                interval={false}
            >
                {
                    items.map((item, inx) => {
                        return (
                            <CarouselItem
                                onExiting={() => setAnimating(true)}
                                onExited={() => setAnimating(false)}
                                key={inx}
                            >
                                {
                                    {
                                        "THEME_SELECTION": <ThemeSelection themes={themes} />,
                                        "BASIC_DETAILS": <BasicDetails />,
                                    }[item]
                                }
                            </CarouselItem>
                        )
                    })
                }
            </Carousel>
            <div className="d-flex w-100 justify-content-between">
                <Button color="primary" onClick={previous}>Prev</Button>
                <Button color="primary" onClick={next}>Next</Button>
            </div>
        </section>
    )
}

const mapStateToProps = ({ dashboard }) => ({
    plan: dashboard.plan || {}
})

export default connect(mapStateToProps)(NewCard)