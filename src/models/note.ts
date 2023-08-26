import {modelOptions, prop, getModelForClass} from '@typegoose/typegoose'

@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})
 class Note{


    @prop({type:String})
    title: String

    @prop({type:String})
    description: String

    @prop({type: Boolean})
    done: Boolean

}


export default getModelForClass(Note);