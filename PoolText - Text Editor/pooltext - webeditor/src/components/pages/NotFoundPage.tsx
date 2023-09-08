import React from 'react'
import { Button } from 'primereact/button'
import { Panel } from 'primereact/panel'
import { Fieldset } from 'primereact/fieldset'
import { Card } from 'primereact/card'

const NotFoundPage = () => {

    const cardHeader = (
        <div className="flex align-items-center justify-content-between mb-0 p-3 pb-0">
            <h5 className="m-0">Card</h5>
            <Button icon="pi pi-cog" className="p-button-text" />
        </div>
    );


    return (
        <>
            <div className="exception-body notfound">
                <div className="exception-panel">
                    <h1>404</h1>
                    <h3>not found</h3>
                    <p>The page that you are looking for does not exist</p>
                </div>

                <div className="card">
                    <h5>Toolbar</h5>
                    <div className="p-toolbar p-component">
                        deneme
                    </div>
                </div>

                <div className="col-12 md:col-6">
                <div className="card">
                    <h5>Panel</h5>
                    <Panel header="Header" toggleable>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>
                </div>
                <div className="card">
                    <h5>Fieldset</h5>
                    <Fieldset legend="Legend" toggleable>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Fieldset>
                </div>
                <Card header={cardHeader}>
                    <p className="line-height-3 m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Card>
            </div>

            <div>
                <div className="grid">
                    <div className="col-12 md:col-6">
                        <div className="card">
                            <h5>Default</h5>
                            <Button label="Submit" className="mr-2 mb-2"></Button>
                            <Button label="Disabled" className="mr-2 mb-2" disabled></Button>
                            <Button label="Link" className="p-button-link mb-2 mr-2"></Button>
                        </div>

                        <div className="card">
                            <h5>Severities</h5>
                            <Button label="Primary" className="mr-2 mb-2" />
                            <Button label="Secondary" className="p-button-secondary mr-2 mb-2" />
                            <Button label="Success" className="p-button-success mr-2 mb-2" />
                            <Button label="Info" className="p-button-info mr-2 mb-2" />
                            <Button label="Warning" className="p-button-warning mr-2 mb-2" />
                            <Button label="Danger" className="p-button-danger mr-2 mb-2" />
                        </div>

                        <div className="card">
                            <h5>Text</h5>
                            <Button label="Primary" className="p-button-text mr-2 mb-2" />
                            <Button label="Secondary" className="p-button-secondary p-button-text mr-2 mb-2" />
                            <Button label="Success" className="p-button-success p-button-text mr-2 mb-2" />
                            <Button label="Info" className="p-button-info p-button-text mr-2 mb-2" />
                            <Button label="Warning" className="p-button-warning p-button-text mr-2 mb-2" />
                            <Button label="Help" className="p-button-help p-button-text mr-2 mb-2" />
                            <Button label="Danger" className="p-button-danger p-button-text mr-2 mb-2" />
                            <Button label="Plain" className="p-button-plain p-button-text mr-2 mb-2" />
                        </div>

                        <div className="card">
                            <h5>Outlined</h5>
                            <Button label="Primary" className="p-button-outlined mr-2 mb-2" />
                            <Button label="Secondary" className="p-button-outlined p-button-secondary mr-2 mb-2" />
                            <Button label="Success" className="p-button-outlined p-button-success mr-2 mb-2" />
                            <Button label="Info" className="p-button-outlined p-button-info mr-2 mb-2" />
                            <Button label="Warning" className="p-button-outlined p-button-warning mr-2 mb-2" />
                            <Button label="Help" className="p-button-outlined p-button-help mr-2 mb-2" />
                            <Button label="Danger" className="p-button-outlined p-button-danger mr-2 mb-2" />
                        </div>

                        <div className="card">
                            <h5>Button Group</h5>
                            <span className="p-buttonset">
                                <Button label="Save" icon="pi pi-check" />
                                <Button label="Delete" icon="pi pi-trash" />
                                <Button label="Cancel" icon="pi pi-times" />
                            </span>
                        </div>

                    </div>

            <div className="col-12 md:col-6">
                <div className="card">
                    <h5>Icons</h5>
                    <Button icon="pi pi-star-fill" className="mr-2 mb-2"></Button>
                    <Button label="Bookmark" icon="pi pi-bookmark" className="mr-2 mb-2"></Button>
                    <Button label="Bookmark" icon="pi pi-bookmark" iconPos="right" className="mr-2 mb-2"></Button>
                </div>

                <div className="card">
                    <h5>Raised</h5>
                    <Button label="Primary" className="p-button-raised mr-2 mb-2" />
                    <Button label="Secondary" className="p-button-raised p-button-secondary mr-2 mb-2" />
                    <Button label="Success" className="p-button-raised p-button-success mr-2 mb-2" />
                    <Button label="Info" className="p-button-raised p-button-info mr-2 mb-2" />
                    <Button label="Warning" className="p-button-raised p-button-warning mr-2 mb-2" />
                    <Button label="Danger" className="p-button-raised p-button-danger mr-2 mb-2" />
                </div>

                <div className="card">
                    <h5>Rounded</h5>
                    <Button label="Primary" className="p-button-rounded mr-2 mb-2" />
                    <Button label="Secondary" className="p-button-rounded p-button-secondary mr-2 mb-2" />
                    <Button label="Success" className="p-button-rounded p-button-success mr-2 mb-2" />
                    <Button label="Info" className="p-button-rounded p-button-info mr-2 mb-2" />
                    <Button label="Warning" className="p-button-rounded p-button-warning mr-2 mb-2" />
                    <Button label="Danger" className="p-button-rounded p-button-danger mr-2 mb-2" />
                </div>

                <div className="card">
                    <h5>Rounded Icons</h5>
                    <Button icon="pi pi-star-fill" className="p-button-rounded mr-2 mb-2" />
                    <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary mr-2 mb-2" />
                    <Button icon="pi pi-check" className="p-button-rounded p-button-success mr-2 mb-2" />
                    <Button icon="pi pi-search" className="p-button-rounded p-button-info mr-2 mb-2" />
                    <Button icon="pi pi-user" className="p-button-rounded p-button-warning mr-2 mb-2" />
                    <Button icon="pi pi-sign-out" className="p-button-rounded p-button-danger mr-2 mb-2" />
                </div>

                <div className="card">
                    <h5>Rounded Text</h5>
                    <Button icon="pi pi-check" className="p-button-rounded p-button-text mr-2 mb-2" />
                    <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text mr-2 mb-2" />
                    <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text mr-2 mb-2" />
                    <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text mr-2 mb-2" />
                    <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text mr-2 mb-2" />
                    <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text mr-2 mb-2" />
                    <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text mr-2 mb-2" />
                    <Button icon="pi pi-filter" className="p-button-rounded p-button-plain p-button-text mr-2 mb-2" />
                </div>

                <div className="card">
                    <h5>Rounded Outlined</h5>
                    <Button icon="pi pi-check" className="p-button-rounded p-button-outlined mr-2 mb-2" />
                    <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined mr-2 mb-2" />
                    <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined mr-2 mb-2" />
                    <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined mr-2 mb-2" />
                    <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined mr-2 mb-2" />
                    <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined mr-2 mb-2" />
                    <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined mr-2 mb-2" />
                </div>

            </div>
        </div>
                </div>
            </div>
        </>
    )
}

export default NotFoundPage