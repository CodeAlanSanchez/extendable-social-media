<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSaveRequest;
use App\Http\Requests\UpdateSaveRequest;
use App\Models\Save;

class SaveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorecRRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSaveRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\cR  $cR
     * @return \Illuminate\Http\Response
     */
    public function show(Save $cR)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\cR  $cR
     * @return \Illuminate\Http\Response
     */
    public function edit(Save $cR)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatecRRequest  $request
     * @param  \App\Models\cR  $cR
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSaveRequest $request, Save $cR)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\cR  $cR
     * @return \Illuminate\Http\Response
     */
    public function destroy(Save $cR)
    {
        //
    }
}
