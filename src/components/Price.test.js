/**
* @jest-environment jsdom
*/
import { render,fireEvent} from "@testing-library/react";
import React from "react";
import Price from "./Price";
describe(Price, () => {
   it("Price check", () => {
   const {getByTestId} = render(<Price/>)
   const form= getByTestId("form");
   expect(form).toBeTruthy();
   });
   it("Input change test", () =>{
      const {getByTestId}=render(<Price/>);
      const firstName=getByTestId("firstname");
      const firstNameCheck="Peter";
      fireEvent.change(firstName, {target: {value: firstNameCheck}})
      expect(firstName.value).toBe(firstNameCheck);
   })
   it("City change test", () =>{
      const {getByTestId} = render(<Price/>);
      const city=getByTestId("city");
      const cityCheck="Kaposvár";
      fireEvent.change(city, {target: {value:cityCheck}});
      expect(city.value).toBe(cityCheck);
   })
   it("Amount change test", () =>{
      const {getByTestId} = render(<Price/>);
      const amount=getByTestId("amount");
      const amountCheck=50
      fireEvent.change(amount, {target: {value:amountCheck}});
      expect(Number(amount.value)).toBe(amountCheck);
   })
   it("Contact change test", () =>{
      const {getByTestId} = render(<Price/>);
      const contact=getByTestId("contact");
      const contactCheck="Kelemen Ákos";
      fireEvent.change(contact, {target: {value:contactCheck}});
      expect(contact.value).toBe(contactCheck);
   })
   it("Tel change test", () =>{
      const {getByTestId} = render(<Price/>);
      const tel=getByTestId("tel");
      const telCheck="06202446077";
      fireEvent.change(tel, {target: {value:telCheck}});
      expect(tel.value).toBe(telCheck);
   })
   it("Email change test", () =>{
      const {getByTestId} = render(<Price/>);
      const email=getByTestId("email");
      const emailCheck="majoros.peter123@gmail.com";
      fireEvent.change(email, {target: {value:emailCheck}});
      expect(email.value).toBe(emailCheck);
   })
   it("comment change test", () =>{
      const {getByTestId} = render(<Price/>);
      const comment=getByTestId("comment");
      const commentCheck="aspaosfpasfoőfasopő asfpőoasopőapsőo pasfasasfa";
      fireEvent.change(comment, {target: {value:commentCheck}});
      expect(comment.value).toBe(commentCheck);
   })
   it("Form submit test", () =>{
      let {queryByTestId} = render(<Price/>);
      const form = queryByTestId("form");
      const modal=queryByTestId("modal");
      fireEvent.submit(form);
      expect(modal.innerHTML).toBe("Sikeresen elküldve!");
     })
     it("submit button click", () =>{
      let {queryByTestId} = render(<Price/>);
      const firstName=queryByTestId("firstname")
      const form = queryByTestId("form");
      const modal=queryByTestId("modal");
         fireEvent.submit(form);
      expect(firstName.innerHTML).toBe("");
     })
       })
     