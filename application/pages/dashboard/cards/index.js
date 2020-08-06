import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import Link from "next/link"

const Cards = ({ virtualCards }) => {
    return (
        <section className="py-3">
            <div className="text-right">
                <Link href="/dashboard/new-card" passHref>
                    <a className="btn btn-primary">New Card</a>
                </Link>
            </div>
            <Row>
                {virtualCards.map((item, inx) => {
                    let { slug, firstName, middleName, lastName } = item
                    return (
                        <Col sm={4} key={inx}>
                            <div >
                                <iframe
                                    src={"/card/" + slug}
                                    style={{ width: "100%", border: 'none', height: 250 }}
                                />
                                <div>
                                    <a target="_blank" href={"/card/" + slug}>{[firstName, middleName, lastName].join(' ')}</a>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </section>
    )
}


const mapStateToProps = ({ dashboard }) => ({
    virtualCards: dashboard.virtual_cards || []
})

export default connect(mapStateToProps)(Cards)