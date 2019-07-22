import React from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import services from './services.json';
import './content.css';

const Services = () => {
    const custom = services.skincare.filter(item => { return item.type === 'Customized Facial'});
    const ultra = services.skincare.filter(item => { return item.type === 'Ultrasonic Facial'});
    const teen = services.skincare.filter(item => { return item.type === 'Teen Facial'});
    const misc = services.skincare.filter(item => { return item.type === 'Misc'});
    const addon = services.skincare.filter(item => { return item.type === 'Add Ons'});
    const classic = services.lashExt.filter(item => { return item.type === 'Classic Set'});
    const volume = services.lashExt.filter(item => { return item.type === 'Hybrid & Volume Sets'});

    const styles = {
        activeLinkStyle: {
            borderBottom: '2px solid #333',
            fontWeight: 300
          }
    };
    return(
        <section id="services">
              <h1>Our Services</h1>
              <var>Our Services</var>
              <Tabs renderActiveTabContentOnly={true} activeLinkStyle={styles.activeLinkStyle}>
              <ul className="serviceList">
                  <li><TabLink to="makeup">Makeup</TabLink></li>
                  <li><TabLink to="skin">Skincare Treatments</TabLink></li>
                  <li><TabLink to="lashes">Lashes & Tinting</TabLink></li>
                  <li><TabLink to="hair">Hair Removal</TabLink></li>
                  <li><TabLink to="tanning">Spray Tanning</TabLink></li>
                  <li><TabLink to="bridal">Bridal Services</TabLink></li>
              </ul>
              <div className="serviceContent">
              <TabContent for="makeup">
                <ul className="makeup">
                    {
                        services.makeup.map((item, index) => (
                            <li key={index}>
                                <div className="serviceItem">
                                    <div className="listItem"><h5>{item.service}</h5></div>
                                    <div className="line"></div>
                                    <div className="price"><p>{item.price}</p></div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
              </TabContent>
              <TabContent for="skin">
                <div className="skintype">
                <div className="type">
                    <h4>{services.skincareTypes[0].type}</h4>
                    <p>{services.skincareTypes[0].detail}</p>
                    <ul>
                    {
                        custom.map((item, index) => (
                            <li key={index}>
                                <div className="serviceItem">
                                    <div className="listItem"><h5>{item.service}</h5></div>
                                    <div className="line"></div>
                                    <div className="price"><p>{item.price}</p></div>
                                </div>
                                <p className="detail">{item.detail}</p>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="type">
                    <h4>{services.skincareTypes[1].type}</h4>
                    <p>{services.skincareTypes[1].detail}</p>
                    <ul>
                    {
                        ultra.map((item, index) => (
                            <li key={index}>
                                <div className="serviceItem">
                                    <div className="listItem"><h5>{item.service}</h5></div>
                                    <div className="line"></div>
                                    <div className="price"><p>{item.price}</p></div>
                                </div>
                                <p className="detail">{item.detail}</p>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="type">
                    <h4>{services.skincareTypes[2].type}</h4>
                    <p>{services.skincareTypes[2].detail}</p>
                    <ul>
                    {
                        teen.map((item, index) => (
                            <li key={index}>
                                <div className="serviceItem">
                                    <div className="listItem"><h5>{item.service}</h5></div>
                                    <div className="line"></div>
                                    <div className="price"><p>{item.price}</p></div>
                                </div>
                                <p className="detail">{item.detail}</p>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="type">
                    <h4>Other Skincare Treatments</h4>
                    <ul>
                        {
                            misc.map((item, index) => (
                                <li key={index}>
                                    <div className="serviceItem">
                                        <div className="listItem"><h5>{item.service}</h5></div>
                                        <div className="line"></div>
                                        <div className="price"><p>{item.price}</p></div>
                                    </div>
                                    <p className="detail">{item.detail}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="type">
                     <h4>Addons</h4>
                    <ul>
                        {
                            addon.map((item, index) => (
                                <li key={index}>
                                    <div className="serviceItem">
                                        <div className="listItem"><h5>{item.service}</h5></div>
                                        <div className="line"></div>
                                        <div className="price"><p>{item.price}</p></div>
                                    </div>
                                    <p className="detail">{item.detail}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
              </TabContent>
              <TabContent for="lashes">
                <ul className="lashes">
                {
                    services.lashes.map((item, index) => (
                        <li key={index}>
                            <div className="serviceItem">
                                <div className="listItem"><h5>{item.service}</h5></div>
                                <div className="line"></div>
                                <div className="price"><p>{item.price}</p></div>
                            </div>
                        </li>
                    ))
                    }
                </ul>
                <h3 className="lashExtType">Lash Extensions</h3>
                <p className="lashExtType">Classic Sets</p>
                <ul className="lashes">
                    {
                       classic.map((item, index) => (
                            <li key={index}>
                                <div className="serviceItem">
                                    <div className="listItem"><h5>{item.service}</h5></div>
                                    <div className="line"></div>
                                    <div className="price"><p>{item.price}</p></div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <p className="lashExtType">Hybrid & Volume Sets</p>
                <ul className="lashes">
                    {
                       volume.map((item, index) => (
                            <li key={index}>
                                <div className="serviceItem">
                                    <div className="listItem"><h5>{item.service}</h5></div>
                                    <div className="line"></div>
                                    <div className="price"><p>{item.price}</p></div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
              </TabContent>
              <TabContent for="hair">
                <ul className="hair">
                {
                    services.waxing.map((item, index) => (
                        <li key={index}>
                            <div className="serviceItem">
                                <div className="listItem"><h5>{item.service}</h5></div>
                                <div className="line"></div>
                                <div className="price"><p>{item.price}</p></div>
                            </div>
                        </li>
                    ))
                }
                </ul>
              </TabContent>
              <TabContent for="tanning">
                <ul className="tanning">
                {
                    services.tanning.map((item, index) => (
                        <li key={index}>
                            <div className="serviceItem">
                                <div className="listItem"><h5>{item.service}</h5></div>
                                <div className="line"></div>
                                <div className="price"><p>{item.price}</p></div>
                            </div>
                        </li>
                    ))
                }
                </ul>
              </TabContent>
              <TabContent for="bridal">
                <ul className="lashes">
                {
                    services.bridal.map((item, index) => (
                        <li key={index}>
                            <div className="serviceItem">
                                <div className="listItem"><h5>{item.service}</h5></div>
                                <div className="line"></div>
                                <div className="price"><p>{item.price}</p></div>
                            </div>
                            <p className="detail">{item.detail}</p>
                        </li>
                    ))
                }
                </ul>
              </TabContent>
              </div>
              </Tabs>

              <p className="serviceNote">Please note that all prices and discounts are subject to change at anytime without notice. We are always learning and adding new services to our menu. If you do not see something on our services that you are interested in, we may offer it and it may not be listed yet. So please do not hesitate to ask us about it.</p>
        </section>
    );
}

export default Services;