<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'commentable_type',
        'commentable_id',
        'user_id'
    ];

    protected $with = [
        'user'
    ];

    public function commentable()
    {
        return $this->morphTo(__FUNCTION__, 'commentable_type', 'commentable_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
