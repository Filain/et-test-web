import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {EWhereHere, IFormValues,} from "../../interfases/user";
import {userService} from "../../servises/userService";
import {Simulate} from "react-dom/test-utils";


interface IProps {

}


const RegisterForm: FC<IProps> = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IFormValues>()
    const {id} = useParams<{ id: string }>()


    const save: SubmitHandler<IFormValues> =async (data) => {
       await userService.saveUser(data).catch((error) => alert(`${error.response?.data?.message || error.message}`));

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <>
                <input type="hidden" value={+id} {...register('event_id', {valueAsNumber: true,required: true})} />
            </>
            <div>
                <label>Name:</label>
                <input {...register('name', {required: true})} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" {...register('email', {required: true})} />
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <label>Date:</label>
                <input type="date" {...register('date_birth', {required: true})} />
                {errors.date_birth && <span>This field is required</span>}
            </div>
            <div>Where did yoy hear about this event</div>
            <div>
                <label>
                    <input type="radio" value={EWhereHere.social_media} {...register('where_hear', {required: true})} />
                    Social media
                </label>

                <label>
                    <input type="radio" value={EWhereHere.friends} {...register('where_hear', {required: true})} />
                    Friends
                </label>
                <label>
                    <input type="radio" value={EWhereHere.found_myself} {...register('where_hear', {required: true})} />
                    Found myself
                </label>
                {errors.where_hear && <span>This field is required</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export {RegisterForm};