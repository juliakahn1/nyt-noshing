import React from "react"
import { useDispatch } from "react-redux"
import * as sessionActions from '../../store/session'
import { clearSaves } from "../../store/savedRecipes"
import { closeModal } from "../../store/modals"
import "./SidePanel.scss"
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const SidePanel = ({user}) => {
  const dispatch = useDispatch()
  // let history = useHistory()

  const logout = (e) => {
    e.preventDefault()
    dispatch(clearSaves())
    dispatch(closeModal("sidePanel"))
    dispatch(sessionActions.logout())
    // history.push("/")
  }


  return (
    <>
      <div className="side-panel-background">
        <div className="side-panel-sidebar-wrapper">
          <div className="side-panel-sidebar-inner-wrapper">
            <div className="side-panel-email-exit">
              <h3 className="side-panel-email">{user.email}</h3>
              <svg onClick={() => dispatch(closeModal("sidePanel"))} className="side-panel-x" aria-hidden="true" width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="close"><path d="M6.58807 8.00177L2 12.5898L3.41421 14.0041L8.00229 9.41598L12.59 14.0037L14.0042 12.5895L9.4165 8.00177L14.0041 3.41421L12.5898 2L8.00229 6.58756L3.42007 2.00534L2.00586 3.41956L6.58807 8.00177Z" fill="#121212"></path></svg>
            </div>
            <div>
              <h2 className="side-panel-greeting">Hello there.</h2>
            </div>
            <div>
              <h3 className="side-panel-sub-info">your subscription</h3>
            </div>
            <div>
              <h2 className="side-panel-sub-info-data">All Access</h2>
            </div>
            <div className="side-panel-logout" onClick={(e) => logout(e)}>
              <p>Log out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default SidePanel
