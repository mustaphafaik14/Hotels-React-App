import React from 'react'

export default function Hero({children,hero}) {
    const classes=`${hero} section`
    return (
        <section className={classes}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}
