import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import * as sessionActions from '../../store/session'
import { clearSaves } from "../../store/savedRecipes"
import { closeModal } from "../../store/modals"
import "./SideModal.scss"

const SideModal = () => {
  const dispatch = useDispatch()

  const logout = (e) => {
    e.preventDefault()
    dispatch(clearSaves())
    dispatch(sessionActions.logout())
}

  return (
    <>
      {/* <div className="side-modal-background">

      </div> */}
    </>
  )

}

export default SideModal
