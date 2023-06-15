import { useState, useEffect } from "react";
import React from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import {Container, Row, Col} from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";
import {Dialog} from 'primereact/dialog';
import {InputText} from "primereact/inputtext";
import img from '../assets/img/profile.png';
import Avatar from "react-avatar-edit";
import {Button} from "primereact/button";
import 'react-edit-text/dist/index.css';
import DropDownList from "./DropDownList/DropDownList";
import DogsCards from "./DogCards/DogsCards";

export const UserProfileEdit = () => {

    const [image, setimage] = useState("");
    const [imagecrop, setimagecrop] = useState("");
    const [src, setsrc] = useState(false);
    const [profile, setprofile] = useState([]);
    const [pview, setpview] = useState(false);

    const profileFinal = profile.map((item) => item.pview);

    const onClose = () => {
        setpview(null);
    };

    const onCrop = (view) => {
        setpview(view);
    }

    const saveCropImage = () => {
        setprofile([...profile,{pview}]);
        setimagecrop(false);
    }

    return (
            <section className="userprofile-edit" id="userprofile-edit">

                <div className='profile_img text-center p-4'>
                    <div className='flex flex-column justify-center-center aligh-items-center' >
                        <img
                            style={{
                                width:"200px",
                                height: "200px",
                                borderRadius: "50%",
                                objectFit: "cover",
                            }} onClick={()=> setimagecrop(true)}
                            src={profileFinal.length ? profileFinal : img} alt=""
                        />
                        <Dialog
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                background: "#FFF3EC",
                                borderRadius: "5%",
                                transform: "translate(-50%, -50%)",}}
                                visible={imagecrop} header={() =>(
                                    <p
                                        style = {{
                                            textAlign : "center",
                                            marginTop: "20px",
                                            fontSize: "20px",
                                        }}
                                        htmlFor="" className="text-2x1 font-semibold textColor">Update photo</p>
                                )} onHide={() => setimagecrop(false)}>
                            <div className="confirmation-content flex flex-column aligh-items-center">
                                <Avatar
                                    width={500}
                                    height={400}
                                    onCrop={onCrop}
                                    onClose={onClose}
                                    src={src}
                                    shadingColor={"#474649"}
                                    backgroundColor={"#474649"}
                                />
                                <div className="flex flex-column align-item-center mt-5 w-12">
                                    <div className="flex justify-center-around w-12 mt-4">
                                        <Button
                                            onClick={saveCropImage}
                                            label="Save"
                                            icon="pi pi-check"/>
                                    </div>
                                </div>
                            </div>
                        </Dialog>
                        <React.Fragment>
                            <h1><EditText
                                name="textbox2"
                                style={{padding: '10px', fontSize: '60px'}}
                                defaultValue="Tomek"
                            /></h1>
                        </React.Fragment>
                        <div style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '20em',
                        }}><DropDownList/></div>
                        <div className="aboutme">
                            <textarea
                                rows={10}
                                style={{
                                    padding: '10px',
                                    fontSize: '20px',
                                    textAlign: 'center',
                                    marginTop: '10%',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    width: '400px',
                                    backgroundColor: 'rgb(234,216,205, 0.5)',
                                    borderRadius: '15px',
                                    fontWeight: '400',
                                }}/>
                            <p style={{
                                marginLeft: 'auto',
                                marginRight: 'auto',

                            }
                            }>Napisz coś o sobie</p>
                        </div>
                        <DogsCards />
                        <button><Link to="/logged">ZAPISZ</Link></button>
                    </div>

                </div>


        </section>
    )
}

export default UserProfileEdit