import React from "react";

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container-centered text-center">
        <p className="text-sm">© {new Date().getFullYear()} HyperLeap — All rights reserved</p>
      </div>
    </footer>
  );
}
