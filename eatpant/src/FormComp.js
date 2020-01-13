import React from "react";
import { Form, FormControl } from "react-bootstrap"
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import "./FormComp.css"

const FormComp = () => {

    let content = (
        <Form >
            <Form.Group bsSize="large" controlId="code">
                <Form.Label>Confirmation Code</Form.Label>
                <Form.Control
                    autoFocus
                    type="tel"
                // value={this.state.code}
                // onChange={this.handleChange}
                />
                <Form.Text>
                    Please check your email
                    {/* ({this.state.email})  */}
                    for the confirmation
                    code.
                </Form.Text>
            </Form.Group>
            <hr />
            <Form.Group bsSize="large" controlId="password">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                    type="password"
                // value={this.state.password}
                // onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group bsSize="large" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <FormControl
                    type="password"
                // onChange={this.handleChange}
                // value={this.state.confirmPassword}
                />
            </Form.Group>
            {/* <LoaderButton
                block
                type="submit"
                bsSize="large"
                text="Confirm"
                loadingText="Confirm…"
            isLoading={this.state.isConfirming}
            disabled={!this.validateResetForm()}
            /> */}
        </Form>
    )

    let content2 = (
        <div className="form">
            <Form
            // onSubmit={this.addToMaverick}
            >

                <h4 className="text-center">Add a New Prospect</h4>

                <Form.Group controlId="addToMav.firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        // defaultValue={this.state['addToMav.firstName']}
                        // onChange={this.handleChange}
                        name="exampleForm.ControlSeleckjt1"
                        bsClass="form-control input-sm"
                    />
                    <Form.Text className="form-feedback">
                        Test content for form feedback data
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="addToMav.lastName">
                    <Form.Label>Last Name</Form.Label>
                    <FormControl
                        autoFocus
                        type="text"
                        // defaultValue={this.state['addToMav.lastName']}
                        // onChange={this.handleChange}
                        name="exampleForm.ControlSeleckjt1"
                        bsClass="form-control input-sm"
                    />
                    <Form.Text className="form-feedback">
                        Test content for form feedback data
                    </Form.Text>                </Form.Group>
                <Form.Group controlId="addToMav.title">
                    <Form.Label>Title</Form.Label>

                    <FormControl
                        autoFocus
                        type="text"
                        // onChange={this.handleChange}
                        bsClass="form-control input-sm"
                    />
                    <Form.Text className="form-feedback">
                        Test content for form feedback data
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="addToMav.company">
                    <Form.Label>Company </Form.Label>

                    <Form.Control
                        autoFocus
                        type="text"
                        // onChange={this.handleChange}
                        bsClass="form-control input-sm"
                    />
                    <Form.Text className="form-feedback">
                        Test content for form feedback data
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="addToMav.email">
                    <Form.Label>Email </Form.Label>
                    <FormControl
                        autoFocus
                        type="text"
                        // defaultValue={this.state['addToMav.email']}
                        // onChange={this.handleChange}
                        bsClass="form-control input-sm"
                    />
                    <Form.Text className="form-feedback">
                        Test content for form feedback data
                    </Form.Text>
                    <Checkbox
                        // onChange={this.handleChange} 
                        id="firstTouch"
                        label="Add To First Touch"
                    />
                </Form.Group>

                {/* <LoaderButton
                    block
                    bsSize="large"
                    bsStyle="primary"
                    //disabled={!this.validateForm()}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="ADD TO MAVERICK"
                    loadingText="Adding to Maverick…"
                /> */}

            </Form>
        </div>
    )

    return content2;
}

export default FormComp;