import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Perfil.scss";
export default function Profile() {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.uid);
  return (
    <>
      <div className="profile-content ">
        <form className="form-horizontal">
  
          <div className="content-cajones">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title py-2">User info</h4>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label">Company name</label>
                  <div className="col-sm-12 my-3">
                    <input
                      type="text"
                      className="form-control cajones-change"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Position</label>
                  <div className="col-sm-12 my-3">
                    <input
                      type="text"
                      className="form-control cajones-change"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title pt-5">Contact info</h4>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label">Work number</label>
                  <div className="col-sm-12 my-3">
                    <input type="tel" className="form-control cajones-change" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">
                    Mobile number
                  </label>
                  <div className="col-sm-12 my-3">
                    <input type="tel" className="form-control cajones-change" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">
                    E-mail address
                  </label>
                  <div className="col-sm-12 my-3">
                    <input
                      type="email"
                      className="form-control cajones-change"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Work address</label>
                  <div className="col-sm-12 my-3">
                    <textarea
                      rows="3"
                      className="form-control cajones-change"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title pt-5">Security</h4>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label">
                    Current password
                  </label>
                  <div className="col-sm-12 my-3">
                    <input
                      type="password"
                      className="form-control cajones-change"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">New password</label>
                  <div className="col-sm-12 my-3">
                    <input
                      type="password"
                      className="form-control cajones-change"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
                    <div className="checkbox">
                      <input type="checkbox" id="checkbox_1" />
                      <label htmlFor="checkbox_1">
                        Make this account public
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-boton-final">
            <button type="submit" className="btn-save">
              Guardar
            </button>
          </div>
          </div>
    
        </form>
      </div>
    </>
  );
}
