class ClassWithPrivateStaticField {
    static #privateStaticField = 42;

    static publicStaticMethod(privatevalue) {
        // When invoked through super, `this` still refers to Subclass
        return this.#privateStaticField;
    }
}

class Subclass extends ClassWithPrivateStaticField {
    callSuperMethod() {
        return ClassWithPrivateStaticField.publicStaticMethod();
    }
}

const sub=new Subclass();
sub.callSuperMethod(); 
